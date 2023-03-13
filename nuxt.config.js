const defaultLocale = 'en'

export default {
	modules: [
		['@nuxtjs/i18n', {
			defaultLocale,
      detectBrowserLanguage: {
				fallbackLocale: defaultLocale,
				useCookie: false,
			},
      langDir: 'i18n',
      lazy: true,
      locales: [
				{ code: 'de', file: 'de.json', iso: 'de' },
				{ code: 'en', file: 'en.json', iso: 'en' },
			],
      strategy: 'prefix',
		}]
	]
}
