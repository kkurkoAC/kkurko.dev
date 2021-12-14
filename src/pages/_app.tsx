import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@theme/globalStyle';
import { themes } from '@theme/theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/styles';

enum Mode {
  Dark = 'DARK',
  Light = 'LIGHT',
}

const MODE = Mode.Light;

function CustomApp({ Component, pageProps }: AppProps) {
  // const [mode, setMode] = useState(Mode.Light);

  // useEffect(() => {
  //   if (window) {
  //     console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
  //     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //       setMode(Mode.Dark);
  //     }
  //   }
  // }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes[MODE]}>
        <MuiThemeProvider theme={themes[MODE]}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
}
export default appWithTranslation(CustomApp);
