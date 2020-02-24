const posts = [
  {
    title: "Coffee sugar, chicory seasonal espresso barista americano",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Arista, percolator, cream, aromatic, fair trade, breve body instant lungo vlue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "Overlaid teh jeepers uselessly much excluding",
    date: new Date(2016, 02, 17),
    category: 'tech',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Conconantia, there live the blind texts. Separated they live in Bookmarkgrove right at the coast of the Semantics, a large language ocean.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "According a funnily until pre-set or arrogant well cheerful",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Single shot cultivar beans as chicory caffaine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "Coffee sugar, chicory seasonal espresso barista americano",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Arista, percolator, cream, aromatic, fair trade, breve body instant lungo vlue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "Overlaid teh jeepers uselessly much excluding",
    date: new Date(2016, 02, 17),
    category: 'tech',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Conconantia, there live the blind texts. Separated they live in Bookmarkgrove right at the coast of the Semantics, a large language ocean.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "According a funnily until pre-set or arrogant well cheerful",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Single shot cultivar beans as chicory caffaine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "Coffee sugar, chicory seasonal espresso barista americano",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Arista, percolator, cream, aromatic, fair trade, breve body instant lungo vlue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "Overlaid teh jeepers uselessly much excluding",
    date: new Date(2016, 02, 17),
    category: 'tech',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Conconantia, there live the blind texts. Separated they live in Bookmarkgrove right at the coast of the Semantics, a large language ocean.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "According a funnily until pre-set or arrogant well cheerful",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Single shot cultivar beans as chicory caffaine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
];

let info = [];

for (let i = 0; i < posts.length; i++){
  const post =
  `
  <div class="container-articles">
    <article>
      <div class="image-article">
        <img src=${posts[i].image.source} alt=${posts[i].image.alt}>
        </div>
        <div class="content-article">
        <h1>${posts[i].title}</h1>
        <p class="small">
        MARCH 17, 2016 | ${posts[i].category}
        </p>
        <p class="gray">
        ${posts[i].body}
        </p>
      </div>
    </article>
  </div>
  `;

  info.push(post);
}

let articles = info.join('');
document.querySelector(".articles").innerHTML = articles;



















