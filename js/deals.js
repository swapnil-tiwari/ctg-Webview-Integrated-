function scrapDealForm()
{
	return {service:newdeal_serviceType.value,provider:$$client.organisation,status:'ready',shortDescription:newdeal_title.value,longDescription:newdeal_description.value,currency:'INR','price':newdeal_price.value}
}
async function postDeal()
{
	var dealData=scrapDealForm();
	await api.deals.addDeal(dealData)
}