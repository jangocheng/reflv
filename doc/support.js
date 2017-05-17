import React, { PureComponent } from 'react';
import flvjs from 'flv.js';
import { Table, Tag } from 'antd';

/**
 * FlvSupport
 */
export class FlvSupport extends PureComponent {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { mseFlvPlayback, mseLiveFlvPlayback, networkStreamIO, networkLoaderName, nativeMP4H264Playback, nativeWebmVP8Playback, nativeWebmVP9Playback, } = flvjs.getFeatureList();
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Support',
      dataIndex: 'support',
      key: 'support',
      render: (text) => {
        if (typeof text === 'boolean') {
          return text ? <Tag color="green">true</Tag> : <Tag color="red">false</Tag>;
        }
        return text;
      }
    }, {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }];
    const dataSource = [
      {
        key: 'mseFlvPlayback',
        name: 'mseFlvPlayback',
        support: mseFlvPlayback,
        description: 'Same to flvjs.isSupported(), indicates whether basic playback works on your browser.'
      },
      {
        key: 'mseLiveFlvPlayback',
        name: 'mseLiveFlvPlayback',
        support: mseLiveFlvPlayback,
        description: 'Indicates whether HTTP FLV live stream can works on your browser.'
      },
      {
        key: 'networkStreamIO',
        name: 'networkStreamIO',
        support: networkStreamIO,
        description: 'Indicates whether the network loader is streaming.'
      },
      {
        key: 'networkLoaderName',
        name: 'networkLoaderName',
        support: networkLoaderName,
        description: 'Indicates the network loader type name.'
      },
      {
        key: 'nativeMP4H264Playback',
        name: 'nativeMP4H264Playback',
        support: nativeMP4H264Playback,
        description: 'Indicates whether your browser support H.264 MP4 video file natively.'
      },
      {
        key: 'nativeWebmVP8Playback',
        name: 'nativeWebmVP8Playback',
        support: nativeWebmVP8Playback,
        description: 'Indicates whether your browser support WebM VP8 video file natively.'
      },
      {
        key: 'nativeWebmVP9Playback',
        name: 'nativeWebmVP9Playback',
        support: nativeWebmVP9Playback,
        description: 'Indicates whether your browser support WebM VP9 video file natively.'
      },
    ];
    return (
      <div>
        <h3>Support flv.js feature list for your browser</h3>
        <Table size="small" pagination={false} dataSource={dataSource} columns={columns}/>
      </div>
    );
  }
}
