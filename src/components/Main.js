const Main = () => {
  return (
    <>
    <main> 
    <h1 className="logo-container">Basit Yemekler Restoranı</h1>

        <p className="info-container">Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz? Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.</p>
        <div class="image-container">
            <div class="image-wrapper">
            <img class="hot-dog" src="images/hotdogs.jpg"/>
         </div>
             <div class="image-wrapper">
            <img src="images/sandwich.jpg"/>
             </div> 
           <div class="image-wrapper">
           <img src="images/hamburger.jpg"/>
          </div>                                  
        </div>
    </main>

    </>

  )
}
export default Main