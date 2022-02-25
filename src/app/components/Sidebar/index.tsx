/**
 *
 * Sidebar
 *
 */
import React, { memo } from 'react';
import { Box, Collapsible, Text } from 'grommet';
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
        id="sidebar"
      >
        <Text size="xlarge">Sidebar</Text>
      </Box>
    </Collapsible>
  );
});
