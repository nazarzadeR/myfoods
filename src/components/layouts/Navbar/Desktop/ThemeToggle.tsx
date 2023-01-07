import anime from "animejs";
import React, { useEffect, useRef } from "react";
import { useColorMode, Icon, Center } from "@chakra-ui/react";

interface Props extends React.DetailedHTMLProps<any, any> {}

const ThemeToggle: React.FC<Props> = (props) => {
    const pathRef = useRef<SVGPathElement>(null);
    const { colorMode: theme, toggleColorMode } = useColorMode();
    const name = theme === "dark" ? "moon" : "sun";
    const paths = {
        sun: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
        moon: "M6 10C6 15.5228 9.82464 19.9985 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C10 0 6 4.47715 6 10Z",
    };

    const sunToMoon = () =>
        anime
            .timeline({ duration: 550, easing: "spring" })
            .add({ targets: pathRef.current, d: [{ value: paths.moon }] })
            .add({ targets: "#toggle", rotate: [0, 320] }, "-=250");

    const moonToSun = () =>
        anime
            .timeline({ duration: 550, easing: "spring" })
            .add({ targets: "#toggle", rotate: [320, 0] })
            .add({ targets: pathRef.current, d: [{ value: paths.sun }] });

    useEffect(() => {
        const isPathNotExists = !!!pathRef.current?.getAttribute("d");
        const existsPathChanged =
            pathRef.current?.getAttribute("d") !== paths[name];

        if (isPathNotExists || existsPathChanged)
            pathRef.current?.setAttribute("d", paths[name]);
    }, [theme]);

    const handleClick = async (e: any) => {
        e.target.style.pointerEvents = "none";

        let animation;

        if (name === "moon") animation = moonToSun();

        if (name === "sun") animation = sunToMoon();

        await animation?.finished;

        toggleColorMode();
        e.target.style.pointerEvents = "all";
    };

    return (
        <Center h="full" onClick={handleClick} cursor="pointer" {...props}>
            <Icon
                id="toggle"
                fill="current"
                stroke="current"
                fontSize="1.3rem"
                transform="rotate(320deg)"
                color={theme === "dark" ? "#f5efde" : "#fce570"}
            >
                <path ref={pathRef} />
            </Icon>
        </Center>
    );
};

export default ThemeToggle;
