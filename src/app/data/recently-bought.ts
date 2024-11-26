import Pan from '@/app/images/foil-plate.jpg'
import Plate from '@/app/images/plate.jpg'
import Forks from '@/app/images/fork.jpg'
import Cups from '@/app/images/cups.jpg'
import Skewers from '@/app/images/skewers.jpg'
import Baking from '@/app/images/baking.jpg'
import Cloth from '@/app/images/cloth.jpg'

export const recentlyBought = [
	{
		title: "Disposable Aluminum Foil Pans",
		image: Pan.src,
		description: "Sturdy and lightweight pans for baking.",
		price: "€8.99",
		sponsored: true,
		attributes: ["9x13 inches", "Pack of 10", "Heat Resistant: 450°F"],
	},
	{
		title: "Biodegradable Paper Plates",
		image: Plate.src,
		description: "Eco-friendly plates for parties and picnics.",
		price: "€12.49",
		attributes: ["10-inch diameter", "Pack of 50", "Compostable"],
	},
	{
		title: "Plastic Cutlery Set",
		image: Forks.src,
		description: "Durable disposable cutlery.",
		price: "€6.99",
		sponsored: true,
		attributes: ["100 pieces", "Recyclable plastic", "BPA-free"],
	},
	{
		title: "Disposable Coffee Cups",
		image: Cups.src,
		description: "Insulated cups with secure snap-on lids.",
		price: "€10.99",
		attributes: ["12oz size", "Pack of 25", "Leak-proof lids"],
	},
	{
		title: "Disposable Bamboo Skewers",
		image: Skewers.src,
		description: "Eco-friendly skewers for grilling.",
		price: "€4.49",
		attributes: ["10-inch length", "Pack of 100", "Compostable"],
	},
	{
		title: "Disposable Baking Cups",
		image: Baking.src,
		description: "Perfect for cupcakes and muffins.",
		price: "€5.99",
		sponsored: true,
		attributes: ["Standard size", "Pack of 200", "Non-stick coating"],
	},
	{
		title: "Disposable Tablecloths",
		image: Cloth.src,
		description: "Protect your tables with stylish tablecloths.",
		price: "€7.99",
		attributes: ["54x108 inches", "Pack of 3", "Waterproof material"],
	}
];

export const mostBought = recentlyBought.slice().reverse();
