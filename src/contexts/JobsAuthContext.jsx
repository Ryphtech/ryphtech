import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const JobsAuthContext = createContext();

export const useJobsAuth = () => {
  const context = useContext(JobsAuthContext);
  if (!context) {
    throw new Error('useJobsAuth must be used within a JobsAuthProvider');
  }
  return context;
};

export const JobsAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null); // 'company' or 'student'
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Check for existing session
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);
          await fetchUserProfile(session.user.id);
        }
      } catch (error) {
        console.error('Error getting session:', error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session.user);
          await fetchUserProfile(session.user.id);
        } else {
          setUser(null);
          setUserType(null);
          setProfile(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
        return;
      }

      if (data) {
        setProfile(data);
        setUserType(data.user_type);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const signUp = async (email, password, userData) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: userData.fullName,
            user_type: userData.userType
          }
        }
      });

      if (error) throw error;

      if (data.user) {
        // Create user profile
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert({
            user_id: data.user.id,
            full_name: userData.fullName,
            email: email,
            user_type: userData.userType,
            company_name: userData.companyName || null,
            phone: userData.phone || null,
            location: userData.location || null,
            skills: userData.skills || [],
            experience_level: userData.experienceLevel || null,
            resume_url: userData.resumeUrl || null,
            company_description: userData.companyDescription || null,
            website: userData.website || null
          });

        if (profileError) {
          console.error('Error creating profile:', profileError);
        }
      }

      return { data, error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      setUserType(null);
      setProfile(null);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const updateProfile = async (updates) => {
    try {
      if (!user) return { error: 'No user logged in' };

      const { error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('user_id', user.id);

      if (error) throw error;

      // Refresh profile data
      await fetchUserProfile(user.id);
      return { error: null };
    } catch (error) {
      console.error('Update profile error:', error);
      return { error };
    }
  };

  const value = {
    user,
    userType,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
    isAuthenticated: !!user,
    isCompany: userType === 'company',
    isStudent: userType === 'student'
  };

  return (
    <JobsAuthContext.Provider value={value}>
      {children}
    </JobsAuthContext.Provider>
  );
};
