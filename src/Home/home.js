import React, { PureComponent, Fragment } from 'react';
import { getAllData_Async } from '../actions'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabView, TabPanel } from 'primereact/tabview';
import { Chart } from 'primereact/chart';
import './home.css'

class Home extends PureComponent {

  state = {

    dataList: [],

  };
  componentDidMount() {
    if (sessionStorage.getItem("user")) {
      this.props.dispatch(getAllData_Async());

    } else {
      this.props.history.push("/login")
    }

  }

  componentDidUpdate() {
    if (this.state.dataList.length === 0) {
      this.setState({ dataList: this.props.data })
    }

  }
  render() {
    // if (!sessionStorage.getItem("user")) {

    // }
    console.log(this.state.dataList)
    console.log(this.state.activeItem)
    let pie1 = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            '#C6F9D2',
            '#CCCCB3',
            '#CECEFF',
            '#FFCAFF',
            '#D0CCCD',
            '#FFCC99',
            '#FFCBB9',
            '#EAEC93',
            '#D7FBE6',
            '#FFCACA',
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            '#CCCCB3',
            '#CE11FF',
            '#FECAFF',
            '#D0C45D',
            '#FFC749',
            '#FFAAB9',
            '#EA1193',
            '#D756E6',
            '#2FCACA',
            "#F44384",
            "#3652EB",
          ],
        }
      ]
    }

    const bar1 = {
      labels: [],
      datasets: [
        {
          label: 'Hour',
          backgroundColor: '#42A5F5',
          data: []
        },
        
      ]
    };
    let showTable = "Loading..";
    let pieChart = "Loading.."
    let barchart = "Loading.."

    if (this.state.dataList.length > 0) {
      showTable = (
        < DataTable value={this.state.dataList} scrollable={true} scrollHeight="400px">
          <Column field="dom" header="DOM" />
          <Column field="dow" header="DOW" />
          <Column field="insid" header="Insid" />
          <Column field="hour" header="Hour" />
          <Column field="SumHourly" header="SumHourly" />
        </DataTable >
      )

      this.state.dataList.forEach(ele => {
        pie1.labels.push(ele.hour)
      })

      var count = {};
      pie1.labels.forEach(function (i) { count[i] = (count[i] || 0) + 1; });

      pie1.labels = [...Object.keys(count)];
      pie1.datasets[0].data = [...Object.values(count)];
      bar1.labels=[...Object.keys(count)];
      bar1.datasets[0].data=[...Object.values(count)]
      console.log(pie1,bar1)

      pieChart = (
        <Fragment>
          <div>Based on Hour</div>
          <Chart type="pie" data={pie1} />
        </Fragment>
      )

      barchart=(
        <Fragment>
          <div>Based on Hour</div>
          <Chart type="bar" data={bar1} />
        </Fragment>
        
      )
    }


    return (
      <div className="topdiv">

        <TabView >
          <TabPanel header="Table">
            {showTable}
          </TabPanel>
          <TabPanel header="Pie Chart">
            {pieChart}
          </TabPanel>
          <TabPanel header="Bar Chart">
            {barchart}
          </TabPanel>
        </TabView>
      </div>
    )
  }

}

export default Home;