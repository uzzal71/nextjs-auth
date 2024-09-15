# Nextjs authentication
```bash
Go to Google Cloud console
[https://console.cloud.google.com]

1. API & Services
2. Click credentials in sidebar menu

Authorized JavaScript origins
[http://localhost:3000]

Authorized redirect URIs
[http://localhost:3000/api/auth/callback/google]

Create a api folder inside app
src/app/api/auth/[...nextauth]

Create a Auth Secret
openssl rand -hex 32
OR
Another away
[https://generate-secret.vercel.app/32]

Go to
[http://localhost:3000/api/auth/signin]
```