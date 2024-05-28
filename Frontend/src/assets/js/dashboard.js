var options4 = {
    series: [{
      name: 'Target Sales',
      type: 'column',
      data: [4400, 5050, 4140, 6710, 2270, 4130, 2010, 3520, 7520, 3200, 2570, 1600]
    }, {
      name: 'Total Achieve',
      type: 'line',
      data: [4000, 5100, 4500, 6000, 2000, 4000, 2090, 3500, 7000, 3000, 2800, 2000]
    }],
      chart: {
      height: 350,
      type: 'line',
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: [0, 4]
    },
    colors: ['#2262c6', '#e7515a'],
    dropShadow: {
      enabled: true,
      opacity: 0.2,
      blur: 5,
      left: -7,
      top: 22
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      style: {
        colors: ['#ffffff', '#e7515a'],
        fontSize: '12px',
        fontFamily: 'Poppins, sans-serif',
        cssClass: 'apexcharts-yaxis-title',
      },
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yaxis: [{
      labels: {
        formatter: function(value, index) {
          return (value / 1000) + 'K'
        },
        offsetX: -15,
        offsetY: 0,
        style: {
            fontSize: '12px',
            fontFamily: 'Poppins, sans-serif',
            cssClass: 'apexcharts-yaxis-title',
        },
      }
    },{
      opposite: true,
      labels: {
        formatter: function(value, index) {
          return (value / 1000) + 'K'
        },
        offsetX: -10,
        offsetY: 0,
        style: {
            fontSize: '12px',
            fontFamily: 'Poppins, sans-serif',
            cssClass: 'apexcharts-yaxis-title',
        },
      }
    }],
    xaxis: {
      // type: 'datetime',
      labels: {
        offsetX: 0,
        offsetY: 5,
        style: {
            fontSize: '12px',
            fontFamily: 'Poppins, sans-serif',
            cssClass: 'apexcharts-xaxis-title',
        },
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      offsetY: 0,
      fontSize: '13px',
      fontFamily: 'Poppins, sans-serif',
      markers: {
        width: 10,
        height: 10,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },    
      itemMargin: {
        horizontal: 0,
        vertical: 20
      }
    },
    tooltip: {
      theme: 'dark',
      marker: {
        show: true,
      },
      x: {
        show: false,
      }
    },
    grid: {
      borderColor: '#e0e6ed',
      strokeDashArray: 8,
      xaxis: {
        lines: {
          show: true
        }
      },   
      yaxis: {
        lines: {
          show: true,
        }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: -10
      }, 
    }, 
  }
  /* Company Growth - Options */
  var options5 = {
    series: [67],
      chart: {
      height: 316,
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif',
            color: "#2262c6",
            fontWeight: 'bold',
            offsetY: 90
          },
          value: {
            offsetY: 50,
            fontSize: '25px',
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            color: "#333333",
            formatter: function (val) {
              return val + "%";
            }
          },
        }
      }
    },
    fill: {
      type: 'gradient',
      colors: "#3bda39",
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Company Growth'],
  }
  /* Conversion Rate - Options */
  var options6 = {
    series: [{
      name: 'Converted',
      data: [{
          x: 1996,
          y: 32200
        },
        {
          x: 1997,
          y: 32400
        },
        {
          x: 1998,
          y: 32900
        },
        {
          x: 1999,
          y: 34200
        },
        {
          x: 2000,
          y: 34800
        },
        {
          x: 2001,
          y: 33400
        },
        {
          x: 2002,
          y: 32500
        },
        {
          x: 2003,
          y: 31600
        },
        {
          x: 2004,
          y: 31800
        },
        {
          x: 2005,
          y: 33000
        },
        {
          x: 2006,
          y: 35500
        },
        {
          x: 2007,
          y: 36600
        },
        {
          x: 2008,
          y: 33700
        },
        {
          x: 2009,
          y: 35200
        },
        {
          x: 2010,
          y: 37700
        },
        {
          x: 2011,
          y: 38300
        },
        {
          x: 2012,
          y: 34400
        },
        {
          x: 2013,
          y: 36600
        },
        {
          x: 2014,
          y: 38900
        },
        {
          x: 2015,
          y: 33400
        }
      ]
    }, {
      name: 'Not Converted',
      data: [
        {
          x: 1996,
          y: 16200
        },
        {
          x: 1997,
          y: 9000
        },
        {
          x: 1998,
          y: 5000
        },
        {
          x: 1999,
          y: 7700
        },
        {
          x: 2000,
          y: 3500
        },
        {
          x: 2001,
          y: -4500
        },
        {
          x: 2002,
          y: -8800
        },
        {
          x: 2003,
          y: -12000
        },
        {
          x: 2004,
          y: -15600
        },
        {
          x: 2005,
          y: -12300
        },
        {
          x: 2006,
          y: -8800
        },
        {
          x: 2007,
          y: -6600
        },
        {
          x: 2008,
          y: -4500
        },
        {
          x: 2009,
          y: -2900
        },
        {
          x: 2010,
          y: -4500
        },
        {
          x: 2011,
          y: -8800
        },
        {
          x: 2012,
          y: -13200
        },
        {
          x: 2013,
          y: -14600
        },
        {
          x: 2014,
          y: -16900
        },
        {
          x: 2015,
          y: -18400
        }
      ]
    }],
      chart: {
      type: 'area',
      height: 300,
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false
      },
    },
    colors: ['#009688', '#e2a03f'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      type: 'year',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: '12px',
          fontFamily: 'Poppins, sans-serif',
          cssClass: 'apexcharts-yaxis-title',
        },
      }
    },
    yaxis: {
      tickAmount: 4,
      floating: false,
      labels: {
        formatter: function(value, index) {
          return (value / 1000) + 'K'
        },
        show: true,
        offsetX: -20,
        offsetY: 0,
        style: {
          fontSize: '12px',
          fontFamily: 'Poppins, sans-serif',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
    },
    fill: {
      opacity: 0.5
    },
    tooltip: {
      theme: 'dark',
      marker: {
        show: true,
      },
      x: {
        show: false,
      }
    },
    grid: {
      borderColor: '#e0e6ed',
      strokeDashArray: 8,
      xaxis: {
        lines: {
          show: true
        }
      },   
      yaxis: {
        lines: {
          show: true,
        }
      },
      padding: {
        top: 0,
        right: 20,
        bottom: 0,
        left: 10
      }, 
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      offsetY: 0,
      fontSize: '13px',
      fontFamily: 'Poppins, sans-serif',
      markers: {
        width: 10,
        height: 10,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },    
      itemMargin: {
        horizontal: 0,
        vertical: 20
      }
    },
  }

  var chart = new ApexCharts(
    document.querySelector("#targetSales"),
    options4
  ); 