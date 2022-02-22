/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {
  Anchor,
  Box,
  Header as GrommetHeader,
  Menu,
  ResponsiveContext,
} from 'grommet';
import { MapLocation, Menu as MenuIcon } from 'grommet-icons';
interface Props {}

export const Header = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <GrommetHeader background="dark-2" pad="small" height="xxsmall">
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
                    label: <Box pad="small">Grommet.io</Box>,
                    href: 'https://v2.grommet.io/',
                  },
                  {
                    label: <Box pad="small">Feedback</Box>,
                    href: 'https://github.com/grommet/grommet/issues',
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor href="https://v2.grommet.io/" label="Grommet.io" />
              <Anchor
                href="https://github.com/grommet/grommet/issues"
                label="Feedback"
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </GrommetHeader>
  );
});

const Div = styled.div``;
