Multidimensional OLAP system and Druid engine
------------------------------------------------

Unlike the star-schema-based relational OLAP system described earlier, the multidimensional
OLAP system uses one or a small number of multidimensional tables. metatron Discovery
implements the OLAP system using a Druid engine. Below is a Druid data table using the
same objects as the data used in the relational OLAP system discussed in the previous
section.

.. figure:: /_static/img/part01/example_druid_data_table.png
   :alt: Example Druid data table


In a Druid engine-based multidimensional table, a new record is added each time an
event occurs in the same way as with the fact table of the star schema system.
The time is also recorded as a time stamp. As shown in the example above, however,
all data items are saved to one table at once without using the IDs that refer to
specific dimension tables. Since the time stamp is also considered to be a dimension
(time dimension), the data mart above has a total of 4 dimensions.

Although data capacity is increased since duplicated data is increased if this
storage method is selected (for example, the same product name is mentioned repeatedly
in many records), it enables faster and more effective operation when it comes to
analysis for the following reasons:

- Since all data is stored in one or a small number of tables, and can be extracted
  by simply selecting only the columns required for analysis at the time, there is
  far less data load compared to the relational structure.
- The cost required for understanding reference relations between tables and filling
  out/executing the query is reduced accordingly.
- In particular, since it is easy to store and process the data mart by distributing
  it over many nodes (based on Hadoop cluster in the case of Druid engines), data
  can be processed and analyzed in terabyte units very promptly and effectively.

We are now going to provide you with more information on how data analysis takes
place in a multidimensional OLAP system. A three-dimension cube model is sometimes
used for understanding multi-dimensional data mart analysis.

.. figure:: /_static/img/part01/three-dimension_cube_model.png
   :alt: Three-dimension cube model


Each axis of the cube represents each dimension of the OLAP-type data mart.
As cases in which there is a limit of three dimensions are rare in the actual data mart,
such a cube model is merely for illustrating the process of analyzing the data mart
simplified into three dimensions; it cannot express the data mart from the reality
of four dimensions or more.

Although the data mart used as an example in this section is also composed of a total
of four dimensions, we will use only three dimensions by ignoring the "employee" dimension
for convenience in order to explain the fundamentals of the analysis process using such
a three-dimensional cube model. The following is an analysis process for checking the
sales of a specific product for a specific customer during a specific period.


1. First, pick out only the data with product type "pencil" from the data mart.

.. figure:: /_static/img/part01/dimension_example_pick_pencil.png
   :alt: Pick "pencil"


2. Then select the purchases of Corp. A.

.. figure:: /_static/img/part01/dimension_example_select_corp_a.png
   :alt: Select Corp. A.


3. Finally, select data in 2018. The following example indicates Corp. A purchased
16 units of Product A on June 9, 2018, and 2 units on October 16, 2018.

.. figure:: /_static/img/part01/dimension_example_select_data_in_2018.png
   :alt: Select data in 2018


metatron Discovery provides many functions for analysis of multi-dimensional data
with an intuitive GUI.
