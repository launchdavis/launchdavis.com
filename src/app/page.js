import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
      <Box
          sx={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `
          radial-gradient(circle, #898906 10%, transparent 10%),
          radial-gradient(circle, #022851 20%, transparent 20%),
          radial-gradient(circle, #898906 30%, transparent 30%),
          radial-gradient(circle, #022851 40%, transparent 40%),
          radial-gradient(circle, #898906 50%, transparent 50%),
          radial-gradient(circle, #022851 60%, transparent 60%),
          radial-gradient(circle, #898906 70%, transparent 70%),
          radial-gradient(circle, #022851 80%, transparent 80%)`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundColor: '#0e0066', // Aggie Blue background to fill gaps
              textAlign: 'center',
          }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Davis Launch
        </Typography>
        <Typography variant="h5" maxWidth="600px" gutterBottom>
          Building startups that empower the Davis community through innovation and collaboration.
        </Typography>
        <Typography variant="h6" maxWidth="600px" gutterBottom>
          Coming soon
        </Typography>

      </Box>
  );
}
