import { useRef } from "react";
import { Grid, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = TProps<{
    recipe: Recipe.TRecipe;
}>;

export default function recipeDetailedButton({ recipe }: Props) {
    const { t } = useTranslation();
    const linkRef = useRef<any>(null);
    const color = useColorModeValue("white", "black");
    const btnColor = useColorModeValue("black", "white");

    const handleOnMouseMove = (e: any) => {
        let { scrollX, scrollY } = window,
            { clientX, clientY } = e,
            { x, y } = linkRef?.current?.getBoundingClientRect()!,
            offsetTop = Math.ceil(clientY - (y - scrollY)),
            offsetLeft = Math.ceil(clientX - (x - scrollX));

        linkRef.current?.setAttribute(
            "style",
            `--x: ${offsetLeft}px; --y: ${offsetTop}px`,
        );
    };
    return (
        <Grid
            w="60%"
            h="50px"
            replace
            fontSize="lg"
            ref={linkRef}
            zIndex="2100"
            cursor="pointer"
            as={RouterLink}
            state={{ recipe }}
            fontWeight="bold"
            position="relative"
            borderRadius="base"
            bg="chakra-body-bg"
            alignItems="center"
            marginInline="auto"
            justifyContent="center"
            marginBlock="3 !important"
            to={`/recipe/${recipe.label}`}
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
            {t("words.readMore")}
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
                {t("words.readMore")}
            </Grid>
        </Grid>
    );
}
