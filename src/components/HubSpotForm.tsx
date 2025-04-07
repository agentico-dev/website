import * as React from 'react';
import { Box, Divider, Link, Stack, Typography } from '@mui/joy';

export default function HubSpotForm({ divider = true }): JSX.Element {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "21339207",
                    formId: "93a8a63d-4948-43c7-a3d9-4062684a303e",
                    target: '#hubspotForm'
                })
            }
        });
    }, []);
    return (
        <>
            {divider && (
                <Divider
                    inset='none'
                    orientation='horizontal'
                    sx={{ my: 2 }}
                />
            )}
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    my: 2,
                    alignSelf: 'stretch',
                    flexBasis: '80%',
                    flexDirection: 'column',
                }}
            >
                <Stack spacing={1}>
                    <div id="hubspotForm"
                        // centered
                        style={{ margin: 'auto' }}
                    ></div>
                    <Typography 
                        // component="span"
                        fontSize={"xs"} textColor="text.secondary"
                        // align="center"
                    >
                        By continuing you agree to our{' '}
                        <Link color="neutral">
                            <b>Privacy Policy</b>
                        </Link>
                    </Typography>
                </Stack>
            </Box>
        </>
    );
}