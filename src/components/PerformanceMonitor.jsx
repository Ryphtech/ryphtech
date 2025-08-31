import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Declare observer variables in the outer scope
    let lcpObserver, fidObserver, clsObserver, fcpObserver, resourceObserver, longTaskObserver;

    // Helper function to check if entry type is supported
    const isEntryTypeSupported = (entryType) => {
      try {
        const observer = new PerformanceObserver(() => {});
        observer.observe({ entryTypes: [entryType] });
        observer.disconnect();
        return true;
      } catch (error) {
        return false;
      }
    };

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint (LCP)
        if (isEntryTypeSupported('largest-contentful-paint')) {
          lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
            
            // Send to analytics if needed
            if (window.gtag) {
              window.gtag('event', 'LCP', {
                value: Math.round(lastEntry.startTime),
                event_category: 'Web Vitals'
              });
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        }

        // First Input Delay (FID)
        if (isEntryTypeSupported('first-input')) {
          fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.log('FID:', entry.processingStart - entry.startTime);
              
              if (window.gtag) {
                window.gtag('event', 'FID', {
                  value: Math.round(entry.processingStart - entry.startTime),
                  event_category: 'Web Vitals'
                });
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        }

        // Cumulative Layout Shift (CLS)
        if (isEntryTypeSupported('layout-shift')) {
          let clsValue = 0;
          clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                console.log('CLS:', clsValue);
                
                if (window.gtag) {
                  window.gtag('event', 'CLS', {
                    value: Math.round(clsValue * 1000) / 1000,
                    event_category: 'Web Vitals'
                  });
                }
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        }

        // First Contentful Paint (FCP)
        if (isEntryTypeSupported('first-contentful-paint')) {
          fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const firstEntry = entries[0];
            console.log('FCP:', firstEntry.startTime);
            
            if (window.gtag) {
              window.gtag('event', 'FCP', {
                value: Math.round(firstEntry.startTime),
                event_category: 'Web Vitals'
              });
            }
          });
          fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });
        }
      } catch (error) {
        console.warn('Performance monitoring setup failed:', error);
      }
    }

    // Monitor page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            ttfb: navigation.responseStart - navigation.requestStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart
          };

          console.log('Performance Metrics:', metrics);
          
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'performance_metrics', {
              dns_time: Math.round(metrics.dns),
              tcp_time: Math.round(metrics.tcp),
              ttfb: Math.round(metrics.ttfb),
              dom_content_loaded: Math.round(metrics.domContentLoaded),
              load_complete: Math.round(metrics.loadComplete),
              total_load_time: Math.round(metrics.totalLoadTime),
              event_category: 'Performance'
            });
          }
        }
      }, 0);
    });

    // Monitor resource loading
    try {
      if (isEntryTypeSupported('resource')) {
        resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.initiatorType === 'img' || entry.initiatorType === 'script' || entry.initiatorType === 'css') {
              console.log(`${entry.initiatorType} loaded:`, entry.name, entry.duration);
            }
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
      }
    } catch (error) {
      console.warn('Resource monitoring setup failed:', error);
    }

    // Monitor long tasks
    try {
      if (isEntryTypeSupported('longtask')) {
        longTaskObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('Long task detected:', entry.duration);
            
            if (window.gtag) {
              window.gtag('event', 'long_task', {
                value: Math.round(entry.duration),
                event_category: 'Performance'
              });
            }
          });
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      }
    } catch (error) {
      console.warn('Long task monitoring setup failed:', error);
    }

    // Cleanup observers on unmount
    return () => {
      try {
        lcpObserver?.disconnect();
        fidObserver?.disconnect();
        clsObserver?.disconnect();
        fcpObserver?.disconnect();
        resourceObserver?.disconnect();
        longTaskObserver?.disconnect();
      } catch (error) {
        console.warn('Error during performance monitor cleanup:', error);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
