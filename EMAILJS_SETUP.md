# EmailJS Setup Guide

## Overview
This guide will help you set up EmailJS to make your contact form functional.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Design your email template using these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{company}}` - Sender's company
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Configure Environment Variables
1. Create a `.env` file in your project root
2. Add your credentials:

```bash
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=optional_autoreply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

**Example:**
```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_autoreply123
VITE_EMAILJS_PUBLIC_KEY=user_def456
```

## Step 6: Auto‑reply Template (optional)
Create a second template for confirmation emails to users. Suggested variables:
- `{{name}}`, `{{subject}}` (optional), and a friendly confirmation message
- Ensure the template uses the "To" field as a dynamic variable (e.g., `{{to_email}}`) so we can pass the user's email in parameters

## Step 7: Test the Form
1. Restart your development server
2. Fill out the contact form
3. Submit and check if both owner notification and auto‑reply are received

## Troubleshooting
- Ensure all IDs are from the same EmailJS account
- Template variables must match the ones in the code
- Rebuild/redeploy after changing envs

## Security Notes
- Never commit your `.env` file
- Credentials are read from env at build time

## Support
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/)
