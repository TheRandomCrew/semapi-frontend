import React from "react";
import { Box, Text, Meter, Stack } from "grommet";
import { StatusBadge } from "./StatusBadge";

export const UtilizationCard = ({ data, url, ...rest }) => (
  <Card>
    <Box gap="large">
      <Box gap="xsmall">
        <h2>
          {data.name}
        </h2>
        <Text color="gray" size="small">
          {data.value} búsquedas/mes
        </Text>
      </Box>
      <Box gap="medium">
        <Box direction="row" align="center">
          <StatusBadge
            background={data.used ? "status-ok" : "status-unknown"}
          />
          <Text color="dark-1" size="small" margin={{ left: "xsmall" }}>
            Usado ({data.usedValue})
          </Text>
        </Box>
        <Box direction="row" align="center">
          <StatusBadge
            background={data.available ? "status-ok" : "status-unknown"}
          />
          <Text color="dark-1" size="small" margin={{ left: "xsmall" }}>
            Disponible ({data.availableValue})
          </Text>
        </Box>
      </Box>
    </Box>
    <Stack anchor="center">
      <Meter
        type="circle"
        background="light-2"
        values={[{ value: data.percent }]}
        size="xsmall"
        thickness="small"
      />
      <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
        <Text size="xlarge" weight="bold">
        {data.percent}
          </Text>
        <Text size="small">%</Text>
      </Box>
    </Stack>
  </Card>
);

const Card = ({children=undefined, ...rest}) => (
  <Box
    direction="row"
    justify="between"
    gap="large"
    pad="medium"
    background="white"
    round
    {...rest}
  >
    {children}
  </Box>
);