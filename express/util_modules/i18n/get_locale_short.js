
// route middleware to get locale short string style

module.exports = function(i18n) 
{
	var locale = i18n.getLocale();

	if (locale === 'en_us')
	{
		return 'en';
	}
	else if(locale === 'pt_pt')
	{
		return 'pt';
	}
}