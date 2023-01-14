import { Box, Divider, Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

type headerProps = {
  title: string;
  description: string;
  element?: ReactNode | null;
};

export function HeaderComponent({
  title,
  description,
  element,
}: headerProps): JSX.Element {
  return (
    <>
      <Box sx={{ width: "100%", height: "300px" }}>
        <Grid
          container
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={7}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <Grid item>
                <Typography variant="h2" sx={{ mt: 2 }}>
                  {title}
                </Typography>
              </Grid>
              <Grid item sx={{ mt: 2 }}>
                <Typography>{description}</Typography>
              </Grid>
              {element !== undefined && (
                <Grid sx={{ mt: 4, width: "100%" }} item>
                  {element}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
}
