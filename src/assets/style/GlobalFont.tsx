import { createGlobalStyle } from "styled-components";
import NotoSansKRBlackTTF from "../font/NotoSansKR-Black.ttf";
import NotoSansKRBlackWOFF from "../font/NotoSansKR-Black.woff";
import NotoSansKRBoldTTF from "../font/NotoSansKR-Bold.ttf";
import NotoSansKRBoldWOFF from "../font/NotoSansKR-Bold.woff";
import NotoSansKRLightTTF from "../font/NotoSansKR-Light.ttf";
import NotoSansKRLightWOFF from "../font/NotoSansKR-Light.woff";
import NotoSansKRMediumTTF from "../font/NotoSansKR-Medium.woff";
import NotoSansKRMediumWOFF from "../font/NotoSansKR-Medium.ttf";
import NotoSansKRRegularTTF from "../font/NotoSansKR-Regular.woff";
import NotoSansKRRegularWOFF from "../font/NotoSansKR-Regular.ttf";
import NotoSansKRThinTTF from "../font/NotoSansKR-Thin.woff";
import NotoSansKRThinWOFF from "../font/NotoSansKR-Thin.ttf";

// 폰트적용
const GlobalFont = createGlobalStyle`	
	@font-face {
		font-family: 'NotoSansKR';
		font-weight: 100;
		src: url(${NotoSansKRThinWOFF});
		src: url(${NotoSansKRThinTTF}) format('truetype'),url(${NotoSansKRThinWOFF}) format('woff')
	}
	
	@font-face {
		font-family: 'NotoSansKR';
		font-weight: 300;
		src: url(${NotoSansKRLightWOFF});
		src: url(${NotoSansKRLightTTF}) format('truetype'),url(${NotoSansKRLightWOFF}) format('woff')
	}
	
	@font-face {
		font-family: 'NotoSansKR';
		font-weight: 400;
		src: url(${NotoSansKRRegularWOFF});
		src:url(${NotoSansKRRegularTTF}) format('truetype'),url(${NotoSansKRRegularWOFF}) format('woff')
	}
	
	@font-face {
		font-family: 'NotoSansKR';
		font-weight: 500;
		src: url(${NotoSansKRMediumWOFF});
		src: url(${NotoSansKRMediumTTF}) format('truetype'),url(${NotoSansKRMediumWOFF}) format('woff')
	}
	
	@font-face {
		font-family: 'NotoSansKR';
		font-weight: 700;
		src: url(${NotoSansKRBoldWOFF});
		src:url(${NotoSansKRBoldTTF}) format('truetype'),url(${NotoSansKRBoldWOFF}) format('woff')
	}
	
	@font-face {
		font-family: 'NotoSansKR';
		font-weight: 900;
		src: url(${NotoSansKRBlackWOFF});
		src: url(${NotoSansKRBlackTTF}) format('truetype'),url(${NotoSansKRBlackWOFF}) format('woff')
	}
`;

export default GlobalFont;
