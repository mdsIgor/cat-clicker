var model = {
    currentCat: null,
    cats: [
      {
        clickCount : 0,
        name : 'Astolfo',
        imgSrc : 'https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'
      },
      {
        clickCount : 0,
        name : 'Rodolfo',
        imgSrc : 'https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale'
      },
      {
        clickCount : 0,
        name : 'Golfo',
        imgSrc : 'https://static01.nyt.com/images/2019/12/03/world/03xp-lilbub/merlin_165345945_7a6f87a8-cdf3-4d00-b389-282ad7630953-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
      },
      {
        clickCount : 0,
        name : 'Tipolfo',
        imgSrc : 'https://abrilexame.files.wordpress.com/2019/05/grumpy-cat.jpg?quality=70&strip=info&w=680'
      }
    ]
  };
  
  var octopus = {
    init : function (){
      model.currentCat = model.cats[0];
      
      catListView.init();
      catView.init();
      catEditView.init();
    },
    
    getCurrentCat: function() {
      return model.currentCat;
    },
    
    getCats: function () {
      return model.cats;
    },
    
    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },
    
    incrementCounter: function() {
      model.currentCat.clickCount++;
      catView.render();
    }
    
  };
  
  var catView = {
      init: function (){
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');
  
        this.catImageElem.addEventListener('click', function(e){
          octopus.incrementCounter();
          catEditView.render();
        })
  
        this.render();
      },

      render: function() {
          var currentCat = octopus.getCurrentCat();
          this.countElem.textContent = currentCat.clickCount;
          this.catNameElem.textContent = currentCat.name;
          this.catImageElem.src = currentCat.imgSrc;
      }
  };

  var catListView = {
      init: function () {
          this.catListElem = document.getElementById('cat-list');
          this.render();
      },

      render: function() {  
          var cats = octopus.getCats();

          this.catListElem.innerHTML = '';

          for (var i = 0; i < cats.length; i++) {
              var cat = cats[i];
              
              var elem = document.createElement('li');
              elem.textContent = cat.name;

              elem.addEventListener('click', (function(cat){
                  return function(){
                      octopus.setCurrentCat(cat);
                      catView.render();
                      catEditView.render();
                  };
              }) (cat));

              this.catListElem.appendChild(elem);
          };

      }
  };

  var catEditView = {
    init: function () {
        //this.catEditViewElem = document.getElementById('cat-edit');
        
        this.render();
    },
    render: function () {

        var catName = document.getElementById('newCatName');
        var catImgUrl = document.getElementById('newCatUrl');
        var catClicks = document.getElementById('newCatClicks');


        catName. value = octopus.getCurrentCat().name;
        catImgUrl.value = octopus.getCurrentCat().imgSrc;
        catClicks.value = octopus.getCurrentCat().clickCount;

        document.getElementById('cat-edit').addEventListener('submit', function() {});
    
    },

    update: function(evt) {

      evt.preventDefault();
      alert("entrei");

      
    }
}



  octopus.init();

