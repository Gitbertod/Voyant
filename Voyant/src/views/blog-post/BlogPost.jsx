import styles from "./BlogPost.module.css";
import NavBar from "../../components/navbar/NavBar";
import { AvatarComponent } from "../../components/avatar/AvatarComponent";
import { CardComponent } from "../../components/Card/CardComponent";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const BlogPost = () => {
  
  useEffect(()=>{
    AOS.init();
    window.scrollTo(0, 0);
  })
    return (
    <>
      <NavBar></NavBar>
      <img className={styles.img} src="/blog-post.jpeg"></img>

      <div data-aos="fade-up"
          data-aos-duration="1000" className={styles.postContent}>
        <h1 className={styles.title}>
          Voyant y Mitsubishi Electrics una alianza para el progreso tecnológico
          del Perú
        </h1>
        <div className="flex justify-start space-x-2 mt-4 mb-4 ml-4 text-yellow-300 font-bold">
          <AvatarComponent />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-500 dark:text-white">
              Victor Salas
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              CEO VOYANT
            </cite>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-4 mb-4 text-yellow-300 font-bold">
          <span>Voyant</span>
          <span>28 de ago, de 2024</span>
        </div>

        <div className={styles.parrafoContainer}>
          <p className="mt-5 mb-5 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tincidunt felis felis, vel fringilla odio ornare et.
            Aliquam erat volutpat. Donec porta, arcu eu pellentesque blandit,
            odio justo tincidunt dui, sed pretium mauris mi quis velit. Aliquam
            lobortis, mi id volutpat gravida, massa leo mattis odio, sed
            venenatis erat nisl vel nibh. Aenean faucibus, felis nec tincidunt
            fringilla, augue libero rhoncus nunc, nec tincidunt nisl mi
            fermentum turpis. Etiam commodo erat sit amet turpis euismod, a
            dictum enim tincidunt. Nam sodales accumsan tortor quis elementum.
            Mauris dignissim fringilla tincidunt.
          </p>
          <p className="mt-5 mb-5 leading-loose">
            Etiam fermentum, lectus varius eleifend rutrum, lacus urna tempus
            justo, sit amet finibus leo erat in nisi. Vivamus in nunc in lacus
            faucibus condimentum. Pellentesque erat lorem, fringilla nec
            consequat pharetra, egestas at tortor. Cras tempus eros a tortor
            maximus volutpat. Curabitur eros tellus, auctor vel libero ut,
            ornare lacinia odio. Pellentesque mattis finibus sollicitudin. Sed
            condimentum massa vel tellus finibus auctor. Proin interdum leo quis
            luctus malesuada. Pellentesque rutrum vestibulum lacus vitae
            condimentum. Duis mattis, nunc vel accumsan volutpat, velit purus
            aliquam leo, mattis faucibus metus tortor non libero. Nullam vitae
            congue nisi, vitae pellentesque augue. Integer placerat orci at elit
            luctus consectetur. Sed ut molestie neque. Vestibulum mauris arcu,
            posuere at imperdiet ac, finibus non tellus.
          </p>
          <p className="mt-5 mb-5 leading-loose">
            Fusce erat diam, porta a lobortis non, tempor sit amet odio. Etiam
            in faucibus quam. Suspendisse viverra euismod mi. Morbi id venenatis
            est, a pellentesque turpis. Phasellus non tempor nibh. Maecenas et
            massa nec dolor imperdiet laoreet. Integer convallis tincidunt neque
            sit amet porta. Vivamus et lacus non lectus laoreet consectetur. Nam
            ac dolor sed purus ullamcorper feugiat viverra eget velit. Nulla
            eget mi a purus rutrum bibendum a at lorem.
          </p>
          <h2 className={styles.subtitle}>Subtítulo de ejemplo</h2>
          <p className="mt-5 mb-5 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tincidunt felis felis, vel fringilla odio ornare et.
            Aliquam erat volutpat. Donec porta, arcu eu pellentesque blandit,
            odio justo tincidunt dui, sed pretium mauris mi quis velit. Aliquam
            lobortis, mi id volutpat gravida, massa leo mattis odio, sed
            venenatis erat nisl vel nibh. Aenean faucibus, felis nec tincidunt
            fringilla, augue libero rhoncus nunc, nec tincidunt nisl mi
            fermentum turpis. Etiam commodo erat sit amet turpis euismod, a
            dictum enim tincidunt. Nam sodales accumsan tortor quis elementum.
            Mauris dignissim fringilla tincidunt.
          </p>
          <p className="mt-5 mb-5 leading-loose">
            Etiam fermentum, lectus varius eleifend rutrum, lacus urna tempus
            justo, sit amet finibus leo erat in nisi. Vivamus in nunc in lacus
            faucibus condimentum. Pellentesque erat lorem, fringilla nec
            consequat pharetra, egestas at tortor. Cras tempus eros a tortor
            maximus volutpat. Curabitur eros tellus, auctor vel libero ut,
            ornare lacinia odio. Pellentesque mattis finibus sollicitudin. Sed
            condimentum massa vel tellus finibus auctor. Proin interdum leo quis
            luctus malesuada. Pellentesque rutrum vestibulum lacus vitae
            condimentum. Duis mattis, nunc vel accumsan volutpat, velit purus
            aliquam leo, mattis faucibus metus tortor non libero. Nullam vitae
            congue nisi, vitae pellentesque augue. Integer placerat orci at elit
            luctus consectetur. Sed ut molestie neque. Vestibulum mauris arcu,
            posuere at imperdiet ac, finibus non tellus.
          </p>
          <p className="mt-5 mb-5 leading-loose">
            Fusce erat diam, porta a lobortis non, tempor sit amet odio. Etiam
            in faucibus quam. Suspendisse viverra euismod mi. Morbi id venenatis
            est, a pellentesque turpis. Phasellus non tempor nibh. Maecenas et
            massa nec dolor imperdiet laoreet. Integer convallis tincidunt neque
            sit amet porta. Vivamus et lacus non lectus laoreet consectetur. Nam
            ac dolor sed purus ullamcorper feugiat viverra eget velit. Nulla
            eget mi a purus rutrum bibendum a at lorem.
          </p>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-20 mb-4 text-yellow-300 font-bold">
          
          <h3 className={styles.subtitle}>Más artículos relacionados:</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 items-center">
  <div className="p-4 transition-transform transform hover:scale-105">
    <CardComponent />
  </div>
  <div className="p-4 transition-transform transform hover:scale-105">
    <CardComponent />
  </div>
  <div className="p-4 transition-transform transform hover:scale-105">
    <CardComponent />
  </div>
</div>

    </>
  );
};

export default BlogPost;
