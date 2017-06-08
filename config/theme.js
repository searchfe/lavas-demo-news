// 定义主题列表
const themeList = {
    // 定义主题名称
    myTheme: {
        themeColor: {
            primary: '#3e98f0',
            // primary: '#4DBA87',
            accent: '$blue.accent-2',
            secondary: '$grey.darken-3',
            info: '$blue.base',
            warning: '$amber.base',
            error: '$red.accent-2',
            success: '$green.base'
        },
        materialDesign: {
            'bg-color': '#fff',
            'fg-color': '#000',
            'text-color': '#000',
            'primary-text-percent': .87,
            'secondary-text-percent': .54,
            'disabledORhints-text-percent': .38,
            'divider-percent': .12,
            'active-icon-percent': .54,
            'inactive-icon-percent': .38
        }
    }
};

module.exports = {
    manifest: {
        // backgroundColor: '#000000',
        // themeColor: '#4DBA87'
    },
    theme: themeList.myTheme // 和主题列表中的主题名称对应
};
