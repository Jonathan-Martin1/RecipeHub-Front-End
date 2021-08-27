import './user.css';

import React from 'react';

import UserNav from './userNav';

const ViewRecipe = () => {
	return (
		<div style={{ display: 'flex' }}>
			<UserNav />
			<div style={{ textAlign: 'center' }}>
				<div>
					<h1>Burrito Recipe</h1>
				</div>
				<div className='cookTime'>
					<h3>Cooking Time</h3>
					<ul>
						<li>Prep Time: 20 minutes</li>
						<li>Cook Time: 20 minutes</li>
						<li>Total Time: 45 minutes</li>
					</ul>
				</div>
				<div className='ingredients'>
					<h3>Ingredients</h3>
					<ul>
						<li>1 lb. lean ground beef</li>
						<li>1 (1 ounce) packet taco seasoning mix</li>
						<li>
							1 ½ cups refried beans (or 1 ½ cups drained and rinsed black
							beans)
						</li>
						<li>¾ cup corn kernels</li>
						<li>
							3 cups cooked rice (I like to use Uncle Ben's microwaveable Ready
							Rice for a quick option)
						</li>
						<li>
							6 large (10-inch) flour tortillas (I like to use Mission brand
							"burrito size" tortillas)
						</li>
						<li>1 ½ cups shredded cheddar cheese</li>
						<li>
							Optional garnish: finely diced red onion; lettuce; diced tomato or
							salsa; sour cream; fresh cilantro; avocado or guacamole
						</li>
					</ul>
				</div>
				<div className='instructions'>
					<h3>Instructions</h3>
					<ol>
						<li>
							Preheat oven to 350° F. Spray 9 x 13-inch baking dish with cooking
							spray and set aside.
						</li>
						<li>
							Cook beef with taco seasoning mix, according to seasoning package
							instructions.
						</li>
						<li>
							To prepare 1 burrito: spread ¼ cup beans down center of tortillas;
							top with ½ cup rice, beef, 2 tablespoons corn, and ¼ cup cheese.
						</li>
						<li>
							Fold in opposite sides of each tortilla, then roll up, burrito
							style. Place, seam-sides down, in prepared dish. Repeat with
							remaining ingredients to prepare 6 total burritos.
						</li>
						<li>
							Cover with foil and bake for 25 minutes (until heated through). If
							you are baking the burritos from the refrigerator while they’re
							still cold, it will take about 30-35 minutes for them to heat
							through.
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default ViewRecipe;
