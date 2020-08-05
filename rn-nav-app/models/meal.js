class Meal {
	constructor(
		id, 
		catId,
		title, 
		value, 
		complexity, 
		imgUrl, 
		duration, 
		ingredients, 
		steps, 
		isGlutenFree,
		isVegan, 
		isVegetarian, 
		isLactoseFree
	) {
		this.id = id; 
		this.catId = catId; 
		this.title = title;
		this.value = value; 
		this.complexity = complexity;
		this.imgUrl = imgUrl; 
		this.duration = duration;
		this.ingredients = ingredients; 
		this.steps = steps; 
		this.isGlutenFree = isGlutenFree; 
		this.isVegan = isVegan;
		this.isVegetarian = isVegetarian; 
		this.isLactoseFree = isLactoseFree;
	}
}

export default Meal;