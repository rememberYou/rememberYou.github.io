import * as React from 'react';
import { Theme, WithStyles } from '@material-ui/core';
declare const styles: (theme: Theme) => Record<"root" | "picture" | "card" | "gitHubIcon" | "icons" | "linkedInIcon" | "mailIcon", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
interface HeaderProps extends WithStyles<typeof styles> {
    classes: any;
    subtitle: JSX.Element;
    title: string;
}
declare const _default: React.ComponentType<Pick<HeaderProps, "title" | "subtitle"> & import("@material-ui/core").StyledComponentProps<"root" | "picture" | "card" | "gitHubIcon" | "icons" | "linkedInIcon" | "mailIcon">>;
export default _default;
