# Email Integration Setup Guide

This project uses [Resend](https://resend.com) for sending contact form emails via Netlify serverless functions.

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
The `.env` file has been created with your Resend API key:
```
RESEND_API_KEY=re_4kToLxdZ_ELQj9poeLkadR7uqxQ3ZECcf
```

**⚠️ Important**: Never commit the `.env` file to version control. It's already in `.gitignore`.

### 3. Test Locally with Netlify CLI

Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

Run the development server with Netlify functions:
```bash
netlify dev
```

This will start:
- Your Vite dev server
- Netlify Functions at `/.netlify/functions/*`

Test the contact form at `http://localhost:8888`

## Deployment to Netlify

### 1. Connect Your Repository
- Go to [Netlify](https://app.netlify.com)
- Click "Add new site" → "Import an existing project"
- Connect your Git repository

### 2. Configure Build Settings
Netlify will auto-detect the settings from `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `client/dist`
- **Functions directory**: `netlify/functions`

### 3. Add Environment Variables
In Netlify dashboard:
1. Go to **Site settings** → **Environment variables**
2. Add the following variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_4kToLxdZ_ELQj9poeLkadR7uqxQ3ZECcf`

### 4. Deploy
Click "Deploy site" and Netlify will build and deploy your site.

## How It Works

1. **Contact Form**: Located in `client/src/components/ContactSection.tsx`
2. **API Client**: `client/src/lib/queryClient.ts` sends POST requests to `/.netlify/functions/send-email`
3. **Serverless Function**: `netlify/functions/send-email.js` receives the form data and uses Resend API to send emails to `shidiqadm@gmail.com`

## Email Configuration

### Current Settings
- **From**: `Bus-X Bookings <onboarding@resend.dev>`
- **To**: `shidiqadm@gmail.com`
- **Reply-To**: Customer's email (from form)

### Customizing the "From" Address
To use a custom domain email (e.g., `bookings@busx.com`):

1. **Add your domain** in Resend dashboard
2. **Verify DNS records** (SPF, DKIM, DMARC)
3. **Update the function** in `netlify/functions/send-email.js`:
   ```javascript
   from: 'Bus-X Bookings <bookings@busx.com>',
   ```

## Email Template

The email includes:
- 📧 Professional HTML formatting
- 👤 Customer information (name, email, phone)
- 🚌 Trip details (type, dates, locations, passengers)
- 💬 Customer message
- 📱 Reply-to set to customer's email for easy responses

## Troubleshooting

### Function not found
- Ensure `netlify.toml` is in the root directory
- Check that `netlify/functions/send-email.js` exists
- Redeploy the site

### Email not sending
- Verify `RESEND_API_KEY` is set in Netlify environment variables
- Check Netlify function logs in the dashboard
- Verify the Resend API key is valid at [Resend Dashboard](https://resend.com/api-keys)

### Local testing issues
- Make sure you're using `netlify dev` not `npm run dev`
- Netlify CLI proxies the functions at `/.netlify/functions/*`

## Testing the Integration

1. Fill out the contact form on your site
2. Submit the form
3. Check `shidiqadm@gmail.com` inbox for the email
4. Verify all form fields are included in the email

## API Rate Limits

Resend free tier includes:
- 100 emails/day
- 3,000 emails/month

For higher volumes, upgrade your Resend plan.

## Security Notes

- ✅ API key is stored securely in environment variables
- ✅ `.env` is excluded from Git
- ✅ Form validation is performed server-side
- ✅ CORS is handled automatically by Netlify
- ✅ Rate limiting is handled by Resend

## Support

For issues with:
- **Resend**: [Resend Documentation](https://resend.com/docs)
- **Netlify Functions**: [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
