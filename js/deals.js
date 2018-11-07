function scrapDealForm()
{
	return {service:newdeal_serviceType.value,provider:'##org#418a2c862f7b8d0725f4572f4df74b5f',status:'ready',shortDescription:newdeal_description.value,longDescription:'the deal',currency:'INR','price':newdeal_price.value}
}
async function postDeal()
{
	var dealData=scrapDealForm();
	await api.deals.addDeal(dealData)
}