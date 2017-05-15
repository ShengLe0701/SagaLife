
import Color from 'color';

import {Platform, Dimensions} from 'react-native';
var devHei = Dimensions.get('window').height;
var devWid = Dimensions.get('window').width;

module.exports = {
    deviceWidth: devWid,
    deviceHeight: devHei,
    brandPrimary : "#7d59c8",
    brandInfo: "#5bc0de",
    brandSuccess: "#5cb85c",
    brandDanger: "#d9534f",
    brandWarning: "#f0ad4e",
    brandSidebar: "#252A30",

    brandSecondary: "#00c497",   //new style

    inverseTextColor: "#000",
    textColor: "#fff",

    fontSizeBase: 18,
    titleFontSize: 18,

    defaultBackgroundColor: '#ebebeb',

    get fontSizeH1 () {
        return this.fontSizeBase*1.8;
    },
    get fontSizeH2 () {
        return this.fontSizeBase* 1.6;
    },
    get fontSizeH3 () {
        return this.fontSizeBase* 1.4;
    },
    get btnTextSize () {
        return this.fontSizeBase* 1.1;
    },
    get btnTextSizeLarge () {
        return this.fontSizeBase* 1.5;
    },
    get btnTextSizeSmall () {
        return this.fontSizeBase* .8;
    },
    get iconSizeLarge () {
        return this.iconFontSize* 1.4;
    },
    get iconSizeSmall () {
        return this.iconFontSize* .6;
    },

    borderRadiusBase: 4,

    get borderRadiusLarge () {
        return this.fontSizeBase* 3.8;
    },

    footerHeight: 55,

    toolbarHeight: (Platform.OS === 'ios' ) ? 70 : 55,
    toolbarDefaultBg: "rgba(84, 199, 252, 1)",
    toolbarInverseBg: "#222",

    tabBgColor: "#7d59c8",
	  tabTextColor: "#fff",

    tabBarHeight: (Platform.OS==='ios') ? 48 : 0,
    contextMarginTop: (Platform.OS==='ios') ? -20 : 0,


    get darkenHeader() {
		    return Color(this.tabBgColor).darken(0.03).hexString();
	  },

    get statusBarColor() {
		    return Color(this.toolbarDefaultBg).darken(0.1).hexString();
	  },

    get btnPrimaryBg () {
        return this.brandPrimary;
    },
    get btnPrimaryColor () {
        return this.textColor;
    },
    get btnSuccessBg () {
        return this.brandSuccess;
    },
    get btnSuccessColor () {
        return this.textColor;
    },
    get btnDangerBg () {
        return this.brandDanger;
    },
    get btnDangerColor () {
        return this.textColor;
    },
    get btnInfoBg () {
        return this.brandInfo;
    },
    get btnInfoColor () {
        return this.textColor;
    },
    get btnWarningBg () {
        return this.brandWarning;
    },
    get btnWarningColor () {
        return this.textColor;
    },

    borderWidth: 1,
    iconMargin: 0,

    get inputColor () {
        return this.inverseTextColor;
    },
    get inputColorPlaceholder () {
        return 'rgba(0, 0, 0, 0.4)';
    },

    inputBorderColor: "#a1a1a1",
    inputHeightBase: 40,
    inputGroupMarginBottom: 10,
    inputPaddingLeft: 5,
    get inputPaddingLeftIcon () {
        return this.inputPaddingLeft* 8;
    },

    dropdownBg: "#000",
    dropdownLinkColor: "#414142",

    btnLineHeight: (Platform.OS==='ios') ? 20 : 23,

    jumbotronPadding: 30,
    jumbotronBg: "#C9C9CE",

    contentPadding: 10,

    listBorderColor: "rgba(181, 181, 181, 0.34)",
    listDividerBg: "#f2f2f2",
    listItemPadding: 15,
    listNoteColor: "#ddd",
    listBg: "#fff",

    iconFontSize: 30,

    badgeColor: "#fff",
    badgeBg: "#ED1727",

    lineHeight: (Platform.OS==="ios") ? 20 : 23,

    defaultSpinnerColor: "#45D56E",
    inverseSpinnerColor: "#1A191B",

    defaultProgressColor: "#E4202D",
    inverseProgressColor: "#1A191B",

    SegmentedControlTintColor: "rgba(84, 199, 252, 1)",
}
