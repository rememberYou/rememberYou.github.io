import * as React from 'react';
import { WithStyles } from '@material-ui/core';
declare const styles: () => Record<"root", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
interface AppProps extends WithStyles<typeof styles> {
    classes: any;
}
declare const _default: React.ComponentType<Pick<AppProps, never> & import("@material-ui/core").StyledComponentProps<"root">>;
export default _default;
