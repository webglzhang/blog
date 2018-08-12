import React from 'react';
import { Timeline , Row , Card } from 'antd';
import { connect } from 'react-redux';
import Utils from '../../utils';
import './index.less';
const { Meta } = Card;


class Archive extends React.Component {
    state = {
        // issues:[]
    }
    // componentWillMount(){
    //     this.updateTime(this.props.issues);
    // }
    // componentWillReceiveProps(nextProps) {
    //     if (this.props.issues !== nextProps.issues) {
    //         this.updateTime(nextProps.issues);
    //     }
    // }

    // updateTime(data){
    //     if(data.length===0) return;
    //     data.map((item,index)=>{
    //         item.created_at = Utils.TimeUpdate(item.created_at)
    //     })
    //     this.setState({issues:data})
    // }

    render() {
        const {issues} = this.props;
        return (
            <Card bordered={false} hoverable={true} className="card" >
                {console.log(this.props.issues)}
                <Meta
                    title={
                        <div>
                            <span className="card-title">归档</span>
                        </div>
                    }
                    description={
                        <Timeline style={{marginTop:20}}>
                            {
                                issues&&issues.length?(
                                    issues.map((item,index)=>{
                                        return (<Timeline.Item key={index}>
                                            <span style={{marginRight:50}}>{item.title}</span>
                                            <span>{item.created_at}</span>
                                            </Timeline.Item>)
                                    })
                                ):null
                            }
                        </Timeline>
                    }
                />
            </Card>
        );
    }
}

const mapStateToProps = state =>{
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps)(Archive);