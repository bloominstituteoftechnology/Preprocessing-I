.home {
    display:flex;
	justify-content:center;
	background: @background;
	color: @fontcolor;
    @media(max-width:@max-width-500) {
       width:100%
    }   
    .header {
      .max-width();
      height: 80px;
      display:flex;
      flex-direction: column;
      justify-content:center;
      align-items:flex-end;
      @media(max-width:@max-width-500) {
       width:100%
      }
      .nav {
        width:35%;
        display: flex;
        justify-content:space-between; 
       
        .a {
           text-decoration:none;
           font-size: 1.8rem;
           color:@fontcolor;

        }
      }
    }

    .top {
       width:100%;
       max-width:800px;
       background:@background;
       padding: 6.25%;
       @media(max-width:@max-width-500) {
       width:100%;
      }
       .name {
          margin:20px 0px;
          font-size: 4.6rem;
        }

       .tech {
          font-size: 2.6rem;
       }

        .hr {
          margin: 30px 0px;

       }
       .choose {
          font-size: 1.8rem;
          margin-bottom: 20px;
       }
      
       .team {
          text-decoration:none;
          font-size: 1.8rem;
          padding: 10px 20px;
          background: gray;
          color: white;
          margin-top: 20px;
          border-radius: 5px;
       }

    }

    .middle {
       width:100%;
       display:flex;
       justify-content:space-between;
      
       margin-bottom: 25px;
	       .content {
	         width: 48%;
	         display:flex;
	         flex-direction:column;
	         justify-content:flex-start;
	         align-items:flex-start;
	         font-size: 1.6rem;
              borcer:1px solid blue;
	         .aside-h2 {
	            font-size:2.6rem;
	            margin: 15px 0px;
	         }
	         .content-summary {
	            line-height: 1.2;
	            font-size:1.6rem;
	         }
	         .un-ordered  {
	            width:100%;
	            .list {
	               display:flex;
	               justify-content:flex-start;
	               padding: 15px 40px;
	               border: 1px solid black;
	             }
	           }
	       }
    }

    .history {
       font-size: 1.6rem;
       .work {
         font-size: 2.4rem;
         margin: 10px 0px;
       }
       .table {
           border: 1px solid black;
           border-collapse: collapse;

           .tr:nth-child(odd) {
			   background-color: #d3d3d3;
			}
			.tr {
           .th {
             text-align:left;
             font-size: 2rem;
           }
           .th, .td {
               border: 1px solid black;
               border-collapse: collapse;
               padding: 12px;
           }

           }
       }

    }
    .footer {
       background: gray;
       width:100%;
       height: 100px;
       .centered-column();
       font-size:1.8rem;
       line-height:1.1;
       
    }
}