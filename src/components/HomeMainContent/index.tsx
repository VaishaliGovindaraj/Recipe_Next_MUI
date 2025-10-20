'use client'
import { Box, Container, Grid, Paper } from "@mui/material";
import { motion } from 'framer-motion';
import React from 'react';


const MotionDiv = motion.div;
const HomeMainContent = () => {

    const images = [1, 2, 3, 4, 5, 6];

    
    const imageList = [...images, ...images];
    return (
        <>
            <Container sx={{ display: 'flex', maxWidth: "1500px !important", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                <Paper variant="outlined" square={false} sx={{ backgroundColor: "#F0FAF0", m: 2, p: 4, fontSize: "1.5rem", maxWidth: "800px", borderRadius: "25px", display: "flex", justifyContent: "center" }}>
                    <p>   If you’re ready to change your relationship with food for the better, follow us @healthfirst for daily meal plans and updates</p>
                </Paper>

                <Box
                    sx={{
                        maxWidth: "100%",
                        overflow: 'hidden',
                        width: '100%',
                        height: 'auto',
                        backgroundColor: '#f5f5f5', 
                    }}
                >
                    <MotionDiv
                        initial={{ x: 0 }}
                        animate={{ x: '-50%' }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatDelay: 50,
                            ease: 'linear',
                        }}
                        style={{
                            display: 'flex',
                            gap: '24px',
                            width: '100%',
                        }}
                    >
                        {imageList.map((item, index) => (
                            <img
                                key={index}
                                src={`/Home_food_${(item)}.jpg`}
                                alt={`Food ${item}`}
                                style={{ width: 450, height: 'auto', borderRadius: '12px' }}
                            />
                        ))}
                    </MotionDiv>
                </Box>

                <Paper square={false} sx={{ m: 1, p: 4, fontSize: "1.5rem", maxwidth: "100%", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    It's time to kick start a new lifestyle. Start eating, feeling & living better today. Build good habits with us in no time.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna velum aliquyam erat, sed diam voluptua. At vero eos et mea accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum.
                    <img src='/main_content_image.jpg' alt="Main content image" width="500px" height="auto" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }} />
                </Paper>

                <Paper >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fbdada', // light pink
                        padding: '60px 20px',
                        position: 'relative',
                        textAlign: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <img src="/banana.jpg" alt="Banana" style={{
                            width: '200px',
                            height: 'auto',
                            objectFit: 'contain',
                            marginRight: '20px'
                        }} />
                        <div style={{ maxWidth: '600px' }}>
                            <p style={{
                                fontSize: '28px',
                                fontWeight: '500',
                                lineHeight: 1.5,
                                margin: '0 0 20px'
                            }}>
                                “The only nutrition program that I found reliable, easy to follow & supremely effective.”
                            </p>
                            <p style={{
                                fontSize: '16px',
                                fontWeight: '400',
                                color: '#333'
                            }}>Thomas Bradley</p>
                        </div>
                        <img src="/juice_bottle.jpg" alt="Juice" style={{
                            width: '200px',
                            height: 'auto',
                            objectFit: 'contain',
                            marginLeft: '20px'
                        }} />
                    </div>
                </Paper>

            </Container>
        </>
    )
}

export default HomeMainContent;