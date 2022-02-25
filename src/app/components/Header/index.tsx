/**
 *
 * Header
 *
 */
import React, { Dispatch, memo, SetStateAction } from 'react';
import styled from 'styled-components/macro';
import {
  Anchor,
  Box,
  Header as GrommetHeader,
  Menu,
  ResponsiveContext,
} from 'grommet';
import { MapLocation, Menu as MenuIcon } from 'grommet-icons';
import { Moon, Sun } from 'grommet-icons';
import { Button } from 'grommet';
interface Props {
  setOpenNotification: Dispatch<SetStateAction<boolean>>;
  openNotification: boolean;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DarkModeProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeButton = (props: DarkModeProps) => {
  return (
    <Button
      id="dark-mode-button"
      hoverIndicator
      onClick={() => props.setDarkMode(!props.darkMode)}
      icon={
        props.darkMode ? (
          <Sun color={props.darkMode ? 'white' : 'black'} />
        ) : (
          <Moon color={props.darkMode ? 'white' : 'black'} />
        )
      }
    />
  );
};

interface MenuButtonProps {
  setOpenNotification: Dispatch<SetStateAction<boolean>>;
  openNotification: boolean;
  darkMode: boolean;
}

const MenuButton = (props: MenuButtonProps) => {
  return (
    <Button
      id="menu-button"
      hoverIndicator
      onClick={() => props.setOpenNotification(!props.openNotification)}
      icon={<MenuIcon color={props.darkMode ? 'white' : 'black'} />}
    />
  );
};

export const Header = memo((props: Props) => {
  return (
    <GrommetHeader
      background={props.darkMode ? 'dark-1' : 'light-2'}
      pad="small"
      height="xxsmall"
      id="header"
    >
      <Anchor icon={<MapLocation color="brand" />} label="Earth Explorer V2" />
      <ResponsiveContext.Consumer>
        {size =>
          size === 'small' ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="brand" />}
                items={[
                  {
                    label: (
                      <DarkModeButton
                        darkMode={props.darkMode}
                        setDarkMode={props.setDarkMode}
                      />
                    ),
                  },
                  {
                    label: (
                      <MenuButton
                        darkMode={props.darkMode}
                        setOpenNotification={props.setOpenNotification}
                        openNotification={props.openNotification}
                      />
                    ),
                  },
                  {},
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <DarkModeButton
                darkMode={props.darkMode}
                setDarkMode={props.setDarkMode}
              />
              <MenuButton
                darkMode={props.darkMode}
                setOpenNotification={props.setOpenNotification}
                openNotification={props.openNotification}
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </GrommetHeader>
  );
});
