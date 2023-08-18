
import {Button} from "react-bootstrap";


export default function WordRecite() {
    return (
        <>
          <div style={{
              display:'flex',
              flexDirection: 'column'
          }}>
              <div>
                  <Button variant="primary" size="lg">发音</Button>
              </div>

              <div>
                  <Button variant="success" size="lg">下一个</Button>
              </div>

              <div>
                  <Button variant="info" size="lg">提示</Button>
              </div>
          </div>

        </>

    )



}
