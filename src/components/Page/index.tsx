import { ForwardedRef, forwardRef } from 'react';

import styles from './styles.module.css';

function Component(_: any, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div className={styles.wrapper} ref={ref}>
      <div role="presentation" className={styles.container}>
        <div style={{ height: 5000 }}>
          <h1>Hello World</h1>
          <img
            alt="0"
            height="300px"
            width="460px"
            src="http://www.fillmurray.com/460/300"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet nisl tortor, id ornare odio sagittis sit amet. Duis
              consectetur sit amet elit nec iaculis. Quisque id magna est.
              Suspendisse malesuada, arcu et sagittis imperdiet, justo massa
              hendrerit risus, vitae iaculis est nisi nec nisl. Phasellus sit
              amet convallis sapien. Nullam dapibus dictum felis et placerat.
              Sed rhoncus mauris in lorem porta, nec vehicula orci viverra.
              Vivamus accumsan orci sed tempus tincidunt. Donec consectetur
              tellus eget justo vestibulum, nec facilisis erat scelerisque.
              Suspendisse efficitur fermentum risus, tincidunt bibendum urna
              porttitor non. Vivamus at euismod purus. Integer vestibulum neque
              eu sapien dictum vestibulum. Nullam eu enim sollicitudin, tempus
              lorem convallis, egestas risus. Mauris cursus, mi a venenatis
              interdum, odio risus bibendum mi, vehicula elementum est lacus
              eget sem. Nulla pretium enim a convallis semper. Phasellus
              sollicitudin a turpis at hendrerit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet nisl tortor, id ornare odio sagittis sit amet. Duis
              consectetur sit amet elit nec iaculis. Quisque id magna est.
              Suspendisse malesuada, arcu et sagittis imperdiet, justo massa
              hendrerit risus, vitae iaculis est nisi nec nisl. Phasellus sit
              amet convallis sapien. Nullam dapibus dictum felis et placerat.
              Sed rhoncus mauris in lorem porta, nec vehicula orci viverra.
              Vivamus accumsan orci sed tempus tincidunt. Donec consectetur
              tellus eget justo vestibulum, nec facilisis erat scelerisque.
              Suspendisse efficitur fermentum risus, tincidunt bibendum urna
              porttitor non. Vivamus at euismod purus. Integer vestibulum neque
              eu sapien dictum vestibulum. Nullam eu enim sollicitudin, tempus
              lorem convallis, egestas risus. Mauris cursus, mi a venenatis
              interdum, odio risus bibendum mi, vehicula elementum est lacus
              eget sem. Nulla pretium enim a convallis semper. Phasellus
              sollicitudin a turpis at hendrerit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet nisl tortor, id ornare odio sagittis sit amet. Duis
              consectetur sit amet elit nec iaculis. Quisque id magna est.
              Suspendisse malesuada, arcu et sagittis imperdiet, justo massa
              hendrerit risus, vitae iaculis est nisi nec nisl. Phasellus sit
              amet convallis sapien. Nullam dapibus dictum felis et placerat.
              Sed rhoncus mauris in lorem porta, nec vehicula orci viverra.
              Vivamus accumsan orci sed tempus tincidunt. Donec consectetur
              tellus eget justo vestibulum, nec facilisis erat scelerisque.
              Suspendisse efficitur fermentum risus, tincidunt bibendum urna
              porttitor non. Vivamus at euismod purus. Integer vestibulum neque
              eu sapien dictum vestibulum. Nullam eu enim sollicitudin, tempus
              lorem convallis, egestas risus. Mauris cursus, mi a venenatis
              interdum, odio risus bibendum mi, vehicula elementum est lacus
              eget sem. Nulla pretium enim a convallis semper. Phasellus
              sollicitudin a turpis at hendrerit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Page = forwardRef(Component);
