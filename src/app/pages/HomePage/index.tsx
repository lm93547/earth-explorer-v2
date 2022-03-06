import { Sidebar } from 'app/components/Sidebar';
import { Box, Main } from 'grommet';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header/Loadable';
import { MapPage } from '../MapPage/Loadable';

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HomePage(props: Props) {
  const [openNotification, setOpenNotification] = React.useState(true);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Main fill>
        <Header
          setOpenNotification={setOpenNotification}
          openNotification={openNotification}
          darkMode={props.darkMode}
          setDarkMode={props.setDarkMode}
        />
        <Box flex direction="row">
          <Box flex align="center" justify="center">
            <MapPage />
          </Box>
          <Sidebar
            openNotification={openNotification}
            darkMode={props.darkMode}
            setDarkMode={props.setDarkMode}
          />
        </Box>
      </Main>
    </>
  );
}
