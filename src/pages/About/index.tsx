import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

import {
    Box,
    Text,
    Link,
    Center,
    Portal,
    useColorModeValue,
} from "@chakra-ui/react";

type Props = {
    containerRef: any;
};

const About: React.FC<Props> = (props) => {
    const { containerRef } = props;
    const linkColor = useColorModeValue("#000000", "#ffffff");
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <Center w="full" h="full">
                <Text
                    px="4"
                    zIndex="3000 "
                    fontSize="xl"
                    fontWeight="bold"
                    textAlign="center"
                    letterSpacing="wide"
                >
                    The site created by nazarzadeR for portfolio purpose 
                    <Link
                        color="teal.500"
                        href="https://github.com/nazarzadeR/myfoods"
                    >
                        &nbsp; code
                    </Link>
                </Text>
            </Center>
            <Portal containerRef={containerRef}>
                <Box w="full" h="full">
                    <Particles
                        id="particles"
                        init={particlesInit}
                        options={{
                            fpsLimit: 120,
                            fullScreen: {
                                enable: true,
                                zIndex: 2000,
                            },
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 2,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: linkColor,
                                },
                                links: {
                                    color: linkColor,
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: true,
                                    speed: 3,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 140,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                </Box>
            </Portal>
        </>
    );
};

export default About;
