function scrapDealForm()
{
	return {service:newdeal_serviceType.value,provider:$$client.organisation,status:'ready',shortDescription:newdeal_description.value,longDescription:'the deal',currency:'INR','price':newdeal_price.value}
}
async function postDeal()
{
	var dealData=scrapDealForm();
	await api.deals.addDeal(dealData)
}