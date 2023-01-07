import React, { useRef } from "react";
import { Grid, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface Props extends React.DetailedHTMLProps<any, any> {
    name: string;
}

const Button: React.FC<Props> = ({ name }) => {
    const linkRef = useRef<any>(null);
    const color = useColorModeValue("white", "black");
    const btnColor = useColorModeValue("black", "white");

    const handleOnMouseMove = (
        e: any
    ) => {
        let { scrollX, scrollY } = window,
            { clientX, clientY } = e,
            { x, y } = linkRef?.current?.getBoundingClientRect() as DOMRect,
            offsetTop = Math.ceil(clientY - (y - scrollY)),
            offsetLeft = Math.ceil(clientX - (x - scrollX));

        linkRef.current?.setAttribute(
            "style",
            `--x: ${offsetLeft}px; --y: ${offsetTop}px`
        );
    };

    return (
        <Grid
            w="60%"
            h="50px"
            fontSize="lg"
            ref={linkRef}
            zIndex={2000}
            cursor="pointer"
            as={RouterLink}
            fontWeight="bold"
            position="relative"
            borderRadius="base"
            bg="chakra-body-bg"
            alignItems="center"
            marginInline="auto"
            to={`/recipe/${name}`}
            justifyContent="center"
            marginBlock="3 !important"
            onMouseMove={handleOnMouseMove}
            sx={
                {
                    "--y": 0,
                    "--x": 0,
                } as any
            }
            _hover={{
                "& > span": {
                    clipPath: "circle(15% at var(--x, 50%) var(--y, 50%))",
                },
            }}
        >
            Read More
            <Grid
                top="0"
                left="0"
                right="0"
                bottom="0"
                as="span"
                zIndex={0}
                fontSize="lg"
                bg={btnColor}
                color={color}
                fontWeight="bold"
                alignItems="center"
                position="absolute"
                justifyContent="center"
                clipPath="circle(0 at var(--x, 50%) var(--y, 50%))"
            >
                Read More
            </Grid>
        </Grid>
    );
};

export default Button;
