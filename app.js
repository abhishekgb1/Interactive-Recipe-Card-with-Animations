
        // Recipe data stored in a JSON object
        const recipes = {
            "Chocolate Fudge Cake": {
                image: "https://placehold.co/800x600/334155/f1f5f9?text=Chocolate+Fudge+Cake",
                ingredients: [
                    "1 3/4 cups all-purpose flour",
                    "1 3/4 cups granulated sugar",
                    "3/4 cup unsweetened cocoa powder",
                    "1 1/2 teaspoons baking soda",
                    "1 1/2 teaspoons baking powder",
                    "1 teaspoon salt",
                    "2 large eggs",
                    "1 cup milk",
                    "1/2 cup vegetable oil",
                    "2 teaspoons vanilla extract",
                    "1 cup boiling water"
                ],
                instructions: [
                    "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
                    "In a large bowl, sift together flour, sugar, cocoa, baking soda, baking powder, and salt.",
                    "In a separate bowl, mix together eggs, milk, oil, and vanilla. Add to the dry ingredients and beat with a mixer.",
                    "Carefully stir in the boiling water. The batter will be thin.",
                    "Pour evenly into the prepared pans and bake for 30 to 35 minutes, or until a toothpick inserted into the center comes out clean.",
                    "Let cool in the pans for 10 minutes before turning out onto a wire rack to cool completely."
                ],
                prepTime: 45 // in minutes
            },
            "Classic Pancakes": {
                image: "https://placehold.co/800x600/fecaca/fff?text=Classic+Pancakes",
                ingredients: [
                    "1 1/2 cups all-purpose flour",
                    "3 1/2 teaspoons baking powder",
                    "1 teaspoon salt",
                    "1 tablespoon white sugar",
                    "1 1/4 cups milk",
                    "1 egg",
                    "3 tablespoons butter, melted"
                ],
                instructions: [
                    "In a large bowl, sift together flour, baking powder, salt and sugar.",
                    "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
                    "Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle.",
                    "Cook until pancakes are golden brown on both sides; flip once."
                ],
                prepTime: 20
            },
            "Roasted Chicken": {
                image: "https://placehold.co/800x600/fcd34d/292524?text=Roasted+Chicken",
                ingredients: [
                    "1 (5 pound) whole chicken",
                    "2 tablespoons olive oil",
                    "1 tablespoon dried thyme",
                    "1 tablespoon dried rosemary",
                    "1 teaspoon paprika",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Preheat oven to 425°F (220°C).",
                    "Remove chicken from refrigerator and pat dry with paper towels.",
                    "Rub chicken with olive oil and then with thyme, rosemary, paprika, salt and pepper.",
                    "Roast for 1 hour and 20 minutes, or until the juices run clear when pierced with a fork."
                ],
                prepTime: 80
            },
            "Spaghetti Bolognese": {
                image: "https://placehold.co/800x600/f2f2f2/333?text=Spaghetti+Bolognese",
                ingredients: [
                    "1 pound ground beef",
                    "1 medium onion, chopped",
                    "2 cloves garlic, minced",
                    "1 (28 ounce) can crushed tomatoes",
                    "1 cup beef broth",
                    "1/2 teaspoon dried oregano",
                    "1/2 teaspoon dried basil",
                    "1 pound spaghetti",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "In a large pot, cook ground beef, onion, and garlic over medium-high heat until meat is browned.",
                    "Drain fat. Stir in crushed tomatoes, beef broth, oregano, basil, salt, and pepper.",
                    "Reduce heat and simmer for at least 30 minutes, stirring occasionally.",
                    "Meanwhile, cook spaghetti according to package directions. Drain well.",
                    "Serve the sauce over the cooked spaghetti."
                ],
                prepTime: 50
            },
            "Classic Guacamole": {
                image: "https://placehold.co/800x600/b1d471/000?text=Classic+Guacamole",
                ingredients: [
                    "3 ripe avocados",
                    "1 small onion, finely chopped",
                    "2 cloves garlic, minced",
                    "1 jalapeno, minced (optional)",
                    "1 ripe tomato, chopped",
                    "1 tablespoon fresh lime juice",
                    "1/4 cup chopped fresh cilantro",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Halve the avocados and remove the pits. Scoop the flesh into a medium bowl.",
                    "Mash the avocado with a fork to your desired consistency.",
                    "Stir in the onion, garlic, jalapeno (if using), tomato, lime juice, cilantro, salt, and pepper.",
                    "Mix well and serve immediately with tortilla chips."
                ],
                prepTime: 15
            },
            "Mashed Potatoes": {
                image: "https://placehold.co/800x600/d4a373/000?text=Mashed+Potatoes",
                ingredients: [
                    "2 pounds russet potatoes, peeled and cubed",
                    "1/2 cup heavy cream",
                    "4 tablespoons unsalted butter",
                    "Salt and white pepper to taste"
                ],
                instructions: [
                    "Place potatoes in a large pot and cover with cold, salted water. Bring to a boil and cook until tender, about 15-20 minutes.",
                    "Drain potatoes and return to the hot pot to dry out for a minute.",
                    "Add heavy cream and butter to the potatoes. Mash until smooth and creamy.",
                    "Season with salt and white pepper. Serve hot."
                ],
                prepTime: 30
            }
        };

        const presentation = {
          'Chocolate Fudge Cake': {category:'From the oven', description:'Rich, deeply chocolatey, and made for sharing. A classic bake for slow afternoons and little celebrations.', image:'assets/chocolate-cake.jpg'},
          'Classic Pancakes': {category:'Breakfast favorites', description:'A golden stack and a slow morning. These fluffy pancakes make an everyday breakfast feel a little more special.', image:'assets/pancakes.jpg'},
          'Roasted Chicken': {category:'At the dinner table', description:'A comforting centerpiece with fragrant herbs and golden skin. Gather your ingredients and make an evening of it.', image:'assets/roasted-chicken.jpg'},
          'Spaghetti Bolognese': {category:'At the dinner table', description:'A pot of rich tomato sauce, a tangle of spaghetti, and everyone around the table. Comfort, one forkful at a time.', image:'assets/spaghetti.jpg'},
          'Classic Guacamole': {category:'Something to share', description:'Creamy avocado, bright lime, and a little crunch. A fresh bowl to bring to the table with your favorite chips.', image:'assets/guacamole.jpg'},
          'Mashed Potatoes': {category:'Comfort classics', description:'Fluffy potatoes, butter, and a splash of cream. A simple, cozy side that always feels like home.', image:'assets/mashed-potatoes.jpg'}
        };
        const recipeSelect = document.getElementById('recipe-select');
        const recipeTitleEl = document.getElementById('recipe-title');
        const recipeImageEl = document.getElementById('recipe-image');
        const ingredientListEl = document.getElementById('ingredient-list');
        const instructionListEl = document.getElementById('instruction-list');
        const startBtn = document.getElementById('start-btn');
        const nextBtn = document.getElementById('next-btn');
        const progressBar = document.getElementById('progress-bar-el');
        const progress = document.querySelector('[role="progressbar"]');
        const timerDisplay = document.getElementById('timer');
        const status = document.getElementById('cooking-status');
        let currentStepIndex = -1;
        let timerInterval;
        let deadline;
        function resetRecipeState() {
            clearInterval(timerInterval);
            currentStepIndex = -1;
            instructionListEl.querySelectorAll('li').forEach(item => { item.classList.remove('active-step'); item.removeAttribute('aria-current'); });
            startBtn.textContent = 'Start Cooking';
            nextBtn.textContent = 'Next Step';
            nextBtn.style.display = 'none';
            nextBtn.disabled = false;
            progressBar.style.width = '0%';
            progress.setAttribute('aria-valuenow', '0');
            timerDisplay.textContent = `${recipes[recipeSelect.value].prepTime}:00`;
            status.textContent = '';
        }
        function loadRecipe(name) {
            const recipe = recipes[name];
            recipeTitleEl.textContent = name;
            const info = presentation[name];
            recipeSelect.value = name;
            recipeImageEl.src = info.image;
            document.getElementById('recipe-category').textContent = info.category;
            document.getElementById('recipe-description').textContent = info.description;
            document.getElementById('recipe-time').textContent = recipe.prepTime + ' min';
            document.getElementById('ingredient-count').textContent = recipe.ingredients.length + ' ingredients';
            document.getElementById('step-count').textContent = recipe.instructions.length + ' steps';
            document.querySelectorAll('[data-recipe]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.recipe === name)));

            recipeImageEl.alt = name === 'Classic Guacamole' ? 'Avocados for homemade guacamole' : name === 'Mashed Potatoes' ? 'Fresh potatoes for homemade mashed potatoes' : name;
            ingredientListEl.replaceChildren(...recipe.ingredients.map(ingredient => {
                const li = document.createElement('li');
                const label = document.createElement('label');
                const checkbox = document.createElement('input'); checkbox.type = 'checkbox';
                const text = document.createElement('span'); text.textContent = ingredient;
                label.append(checkbox, text); li.append(label); return li;
            }));
            instructionListEl.replaceChildren(...recipe.instructions.map(instruction => { const li = document.createElement('li'); li.textContent = instruction; return li; }));
            document.querySelectorAll('.section-toggle').forEach(button => { button.setAttribute('aria-expanded','true'); document.getElementById(button.getAttribute('aria-controls')).classList.remove('hidden'); });
            resetRecipeState();
        }
        function showStep() {
            const items = instructionListEl.querySelectorAll('li');
            items.forEach((item,index) => { item.classList.toggle('active-step',index === currentStepIndex); if(index === currentStepIndex) item.setAttribute('aria-current','step'); else item.removeAttribute('aria-current'); });
            status.textContent = `Step ${currentStepIndex + 1} of ${items.length}`;
            nextBtn.textContent = currentStepIndex === items.length - 1 ? 'Finish Cooking' : 'Next Step';
        }
        function tick() {
            const total = recipes[recipeSelect.value].prepTime * 60;
            const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
            timerDisplay.textContent = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2,'0')}`;
            const percent = Math.min(100, (total - remaining) / total * 100);
            progressBar.style.width = `${percent}%`;
            progress.setAttribute('aria-valuenow',String(Math.round(percent)));
            if (remaining === 0) { clearInterval(timerInterval); status.textContent = 'Timer finished. Check your food before continuing.'; }
        }
        startBtn.addEventListener('click', () => {
            if (currentStepIndex !== -1) { resetRecipeState(); return; }
            currentStepIndex = 0;
            startBtn.textContent = 'Reset';
            nextBtn.style.display = 'block';
            instructionListEl.classList.remove('hidden');
            document.querySelector('[aria-controls="instruction-list"]').setAttribute('aria-expanded','true');
            deadline = Date.now() + recipes[recipeSelect.value].prepTime * 60000;
            clearInterval(timerInterval); tick(); timerInterval = setInterval(tick,250);
            showStep();
        });
        nextBtn.addEventListener('click', () => {
            if (nextBtn.disabled || currentStepIndex < 0) return;
            currentStepIndex++;
            if (currentStepIndex < recipes[recipeSelect.value].instructions.length) showStep();
            else {
                clearInterval(timerInterval);
                instructionListEl.querySelectorAll('li').forEach(item => { item.classList.remove('active-step'); item.removeAttribute('aria-current'); });
                nextBtn.textContent = 'Finished!'; nextBtn.disabled = true;
                status.textContent = 'You finished the recipe. Enjoy!';
            }
        });
        document.querySelectorAll('.section-toggle').forEach(button => button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded',String(!expanded));
            document.getElementById(button.getAttribute('aria-controls')).classList.toggle('hidden',expanded);
        }));
        for(const name of Object.keys(recipes)) { const option = document.createElement('option'); option.value = name; option.textContent = name; recipeSelect.append(option); }
        recipeSelect.addEventListener('change', () => loadRecipe(recipeSelect.value));
        const recipeNav = document.querySelector('#recipe-navigation');
        for (const name of Object.keys(recipes)) {
            const button = document.createElement('button'); button.dataset.recipe = name; button.className = 'recipe-tab';
            button.textContent = name; button.setAttribute('aria-pressed','false');
            button.addEventListener('click',()=>loadRecipe(name)); recipeNav.append(button);
        }
        document.querySelector('#print-recipe').addEventListener('click',()=>window.print());
        recipeImageEl.addEventListener('error',()=>{ if (!recipeImageEl.src.endsWith('recipe-fallback.svg')) recipeImageEl.src='assets/recipe-fallback.svg'; });
        loadRecipe(recipeSelect.value);

    