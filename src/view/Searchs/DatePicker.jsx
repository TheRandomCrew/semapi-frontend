import React from 'react';
import { DropButton, Box, Text, Calendar } from "grommet";
import { Schedule } from "grommet-icons";

const DatePicker = ({ name, value, onChange }) => {
    const [open, setOpen] = React.useState();
    return (
      <DropButton
        name={name}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        dropContent={(
          <Calendar
            locale= "es-ES"
            size="small"
            date={value}
            onSelect={(date) => {
              onChange({ value: date })
              setOpen(false)
            }}
          />
        )}
      >
        <Box
          pad="small"
          direction="row"
          justify="between"
          align="center"
          gap="medium"
        >
          <Text>
            {value ? new Date(value).toLocaleDateString() : "Escoge la fecha "}
          </Text>
          <Schedule color="brand" />
        </Box>
      </DropButton>
    )
}

export default DatePicker;