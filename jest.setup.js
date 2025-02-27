import '@testing-library/jest-dom';

// Mock environment variables
process.env.NEXT_PUBLIC_AWS_REGION = 'us-east-1';
process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID = 'test-key';
process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY = 'test-secret';
process.env.NEXT_PUBLIC_AWS_BUCKET_NAME = 'test-bucket';
process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co';
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key';
process.env.NEXT_PUBLIC_GENIUS_API_KEY = 'test-key';
process.env.NEXT_PUBLIC_MUSIXMATCH_API_KEY = 'test-key';
