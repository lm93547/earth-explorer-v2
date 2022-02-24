/**
 *
 * Sidebar
 *
 */
import React, { memo } from 'react';
import { Box, Button, Collapsible, Heading, Text } from 'grommet';
import styled from 'styled-components/macro';

interface Props {
  openNotification: boolean;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = memo((props: Props) => {
  return (
    <Collapsible direction="horizontal" open={props.openNotification}>
      <Box
        flex
        width="medium"
        background={props.darkMode ? 'dark-2' : 'light-1'}
        pad="small"
        elevation="small"
      >
        <Text size="xlarge">Sidebar</Text>
      </Box>
    </Collapsible>
  );
});

const Div = styled.div``;
