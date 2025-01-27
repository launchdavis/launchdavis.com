import {Box, Typography} from '@mui/material';
import Image from 'next/image';

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
          radial-gradient(circle, #0e0066 10%, transparent 10%),
          radial-gradient(circle, #898906 20%, transparent 20%),
          radial-gradient(circle, #0e0066 30%, transparent 30%),
          radial-gradient(circle, #898906 40%, transparent 40%),
          radial-gradient(circle, #0e0066 50%, transparent 50%),
          radial-gradient(circle, #898906 60%, transparent 60%),
          radial-gradient(circle, #0e0066 70%, transparent 70%),
          radial-gradient(circle, #898906 80%, transparent 80%)`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundColor: '#0e0066', // Aggie Blue background to fill gaps
                textAlign: 'center',
            }}
        >
            <Typography variant="h1" fontWeight="bold" gutterBottom>
                Launch Davis
            </Typography>
            <Image src="/launch-davis-no-bg.svg" alt="Launch Davis Logo" width={200} height={200}/>
            <Typography variant="h5" maxWidth="600px" gutterBottom>
                Building startups that empower the Davis community through innovation and collaboration.<br/><br/>Founded
                by Ehsaan Mohammed and Vijit Dua
            </Typography>
            <Typography variant="h6" maxWidth="600px" gutterBottom><br/>
                Coming soon
            </Typography>

        </Box>
    );
}
