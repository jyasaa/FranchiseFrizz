import { Component, OnInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-fan-gallery',
  templateUrl: './fan-gallery.component.html',
  styleUrls: ['./fan-gallery.component.css']
})
export class FanGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //     videos:Array<string>=['https://www.youtube.com/embed/sD6kfzf6NGw']
  //    playVid:boolean=false
  //    source:string=""
  //  stopVideo(){
  //     this.playVid=!this.playVid
  //     console.log(this.playVid)
  //   }

  //   playVideo(index:any){
  //     this.playVid=!this.playVid
  //     this.source=this.videos[0]
  //   }

  harryObject: Array<object> = [
    {
      video: 'https://youtu.be/sD6kfzf6NGw'
    },
    {
      video:'https://youtu.be/iHBwpYvfx04'
    },
    {
      video:'https://youtu.be/De43wOGOy1U'
    },
    {
      video:'https://youtu.be/u3On1k3dqGA'
    },
    {
      video:'https://youtu.be/DTmKGPXl5iQ'
    },
    {
      video:'https://youtu.be/dbV3qODiBGc'
    },
    {
      video:'https://youtu.be/xJN5EpPLSBE'
    }

  ];

  jackObject: Array<object> = [
    {
      video: 'https://youtu.be/ebw0-MzYvaM'
    },
    {
      video:'https://youtu.be/nKBslba9E3U'
    },
    {
      video:'https://youtu.be/yZIBm5r-ufc'
    },
    {
      video:'https://youtu.be/E_JEjE-bwlQ'
    },
    {
      video:'https://youtu.be/tM4gpS7LLHo'
    },
    {
      video:'https://youtu.be/BaoJ-pJ6dJM'
    }

  ];

  miObject: Array<object> = [
    {
      video: 'https://youtu.be/c0wDEtgS2Dk'
    },
    {
      video:'https://youtu.be/U5o6HNTG6os'
    },
    {
      video:'https://youtu.be/pXy5g_RswAw'
    },
    {
      video:'https://youtu.be/SZiAsh2llAo'
    },
    {
      video:'https://youtu.be/Jj7L0CQMLa0'
    },
    {
      video:'https://youtu.be/6tx6o3ShxeM'
    }

  ];

  jurassicObject: Array<object> = [
    {
      video: 'https://youtu.be/t5BU-t2gYJc'
    },
    {
      video:'https://youtu.be/TAREYy2mRdE'
    },
    {
      video:'https://youtu.be/GOk3ANjMlp0'
    },
    {
      video:'https://youtu.be/2Aj0tD-xb7M'
    },
    {
      video:'https://youtu.be/mG3yFEo-xbM'
    },
    {
      video:'https://youtu.be/CKx-oibeZww'
    }

  ];

  johnObject: Array<object> = [
    {
      video: 'https://youtu.be/Ij1778c7hUc'
    },
    {
      video:'https://youtu.be/hKdm_2_zSmM'
    },
    {
      video:'https://youtu.be/BqfVlXGrMNA'
    },
    {
      video:'https://youtu.be/rlEYOcqiyLA'
    },
    {
      video:'https://youtu.be/rr7PRDHOawg'
    },
    {
      video:'https://youtu.be/0I5mwTE0Bag'
    }

  ];

  jamesObject: Array<object> = [
    {
      video: 'https://youtu.be/YmcDVdC2toU'
    },
    {
      video:'https://youtu.be/1_QuGOONlX0'
    },
    {
      video:'https://youtu.be/-7JmpnNhyX0'
    },
    {
      video:'https://youtu.be/pICK4An1wXo'
    },
    {
      video:'https://youtu.be/96A8H-koOho'
    },
    {
      video:'https://youtu.be/27qjKS_o1Cs'
    }
  ];

}
