
import React, {Component} from 'react';

import './index.scss';
import imageDatas from './data/data.json';

//获取图片数据信息
var imageURLDatas = (function genImageURL(imageDatasArr) {
    for(var i=0,j=imageDatasArr.length;i<j;i++) {
        var singleImageData = imageDatasArr[i];
        singleImageData.imageURL = require('./images/'+singleImageData.fileName);
        imageDatasArr[i] = singleImageData;
    }
    return imageDatasArr;
})(imageDatas)

class GalleryByReactApp extends Component {
    render() {
        return (
            <section className="stage">
               <section className="img-sec">
                </section>
                <nav className="controller-nav">
                </nav>
            </section>
        )
    }
}

export default GalleryByReactApp;

