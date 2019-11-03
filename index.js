module.exports = {
  name: 'plugin-tinypng',
  title: 'TinyPng',
  description: '用于压缩jpg和png格式的图片，压缩率高、出图质量高，无法离线使用，需要自行获取和配置API Key，免费的API Key每月可使用500次',
  type: 'compressor',
  accepts: ['image/png', 'image/jpeg'],
  extensions: ['png', 'jpg', 'jpeg'],
  process: 'main',
  main: './lib',
  postinstall: ({ showMessageBox, openLink, showPluginOptions }) => {
    showMessageBox({
      message: 'TinyPng插件安装成功',
      detail: '请前往https://tinypng.com获取Key',
      defaultId: 0,
      buttons: ['配置Key', '获取Key', '取消'],
    }, (index) => {
      if (index === 0) {
        showPluginOptions()
      } else if (index === 1) {
        openLink('https://tinypng.com/developers')
      }
    })
  },
  options: [
    {
      name: 'api-key',
      label: 'API Key',
      type: 'input',
      helperText: '如何获取API Key?',
      helperLink: 'https://repic.app/support/tiny-png-key.html',
      value: '',
      props: {
        maxLength: 32,
        placeholder: '填写API Key',
      }
    }
  ]
}
