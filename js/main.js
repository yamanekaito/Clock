'use strict'
{
  class Clock {
    drawFace() {
      const canvas = document.getquerySelector('canvas');
      if (typeof canvas.getContext === 'undifined') {
        return;;
      }
      //ブラウザがcanvasをサポートしていない場合に処理を止める
      const ctx = canvas.getContext('2d');

      const width = canvas.width;
      const height = canvas.height;
    }

    run() {
      this.drawFace();
    }
  }

  const clock = new Clock();
  clock.run();

}