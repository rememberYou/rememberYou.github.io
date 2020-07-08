import * as React from 'react';
import { Theme, WithStyles } from '@material-ui/core';
declare const styles: (theme: Theme) => Record<"root" | "content" | "picture" | "card" | "gitHubIcon" | "icons" | "linkedInIcon" | "mailIcon" | "mainTitle" | "secondTitle", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
interface HeaderProps extends WithStyles<typeof styles> {
    classes: any;
    subtitle: JSX.Element;
    title: string;
}
declare const _default: React.ComponentType<Pick<HeaderProps, "title" | "subtitle"> & import("@material-ui/core").StyledComponentProps<"root" | "content" | "picture" | "card" | "gitHubIcon" | "icons" | "linkedInIcon" | "mailIcon" | "mainTitle" | "secondTitle">>;
export default _default;
